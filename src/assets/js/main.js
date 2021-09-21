(function () {
  "use strict";
  var owlCarousel = function () {
    $("#slider1").owlCarousel({
      loop: false,
      margin: 10,
      dots: false,
      nav: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });

    $("#slider2").owlCarousel({
      loop: false,
      margin: 10,
      dots: false,
      nav: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });

    $("#slider3").owlCarousel({
      loop: false,
      margin: 10,
      dots: false,
      nav: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  };

  var videos = function () {
    $(document).ready(function () {
      $("#play-video").on("click", function (ev) {
        $(".fh5co_hide").fadeOut();
        $("#video")[0].src += "&autoplay=1";
        ev.preventDefault();
      });
    });

    $(document).ready(function () {
      $("#play-video_2").on("click", function (ev) {
        $(".fh5co_hide_2").fadeOut();
        $("#video_2")[0].src += "&autoplay=1";
        ev.preventDefault();
      });
    });

    $(document).ready(function () {
      $("#play-video_3").on("click", function (ev) {
        $(".fh5co_hide_3").fadeOut();
        $("#video_3")[0].src += "&autoplay=1";
        ev.preventDefault();
      });
    });

    $(document).ready(function () {
      $("#play-video_4").on("click", function (ev) {
        $(".fh5co_hide_4").fadeOut();
        $("#video_4")[0].src += "&autoplay=1";
        ev.preventDefault();
      });
    });
  };

  var googleTranslateFormStyling = function () {
    $(window).on("load", function () {
      $(".goog-te-combo").addClass("form-control");
    });
  };

  var contentWayPoint = function () {
    var i = 0;

    $(".animate-box").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("animated-fast")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .animate-box.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn animated-fast");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft animated-fast");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight animated-fast");
                  } else {
                    el.addClass("fadeInUp animated-fast");
                  }

                  el.removeClass("item-animate");
                },
                k * 50,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      {offset: "85%"}
    );
    // }, { offset: '90%'} );
  };

  var goToTop = function () {
    $(".js-gotop").on("click", function (event) {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $("html").offset().top,
        },
        500,
        "swing"
      );

      return false;
    });

    $(window).scroll(function () {
      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $(".js-top").addClass("active");
      } else {
        $(".js-top").removeClass("active");
      }
    });
  };

  $(function () {
    owlCarousel();
    videos();
    contentWayPoint();
    goToTop();
    googleTranslateFormStyling();
  });
})();

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {pageLanguage: "en"},
    "google_translate_element"
  );
}

$(document).ready(function () {
  $("#iconOpen").click(function () {
    changeStatus("0%", "0");
    $("#iconOpen").toggle();
    $("#iconClose").toggle();
    // $(".nav-mobile").toggle();

  });
  $("#iconClose").click(function () {
    changeStatus("100%", "0");
    $("#iconClose").toggle();
    $("#iconOpen").toggle();
    // $(".nav-mobile").toggle();
    $(".nav-header").removeClass('nav-header-fixed');
    $('.nav-header').css('z-index', '300');


  });

  function changeStatus(left, right) {
    // $('.nav-overlay').toggle();
    $(".nav-mobile").css({
      "-webkit-transform": `translate(${left}, ${right})`,
      "-webkit-transition": "transform linear 0.2s",

      "-moz-transform": `translate(${left}, ${right})`,
      "-moz-transition": "transform linear 0.2s",

      "-ms-transform": `translate(${left}, ${right})`,
      "-ms-transition": "transform linear 0.2s",

      "-o-transform": `translate(${left}, ${right})`,
      transition: "transform linear 0.2s",

      "-o-transform": `translate(${left}, ${right})`,
      transition: "transform linear 0.2s",
    });
  }
});
// Speech
var seconds, minute, clear;
var getvalue = function () {
  seconds = Number(document.getElementById('secondCouter').innerHTML);
  minute = Number(document.getElementById('minuteCouter').innerHTML);
  seconds++;
  if (seconds == 59) {
    seconds = 0;
    minute++;
  }
  document.getElementById('secondCouter').innerHTML = seconds;
  document.getElementById('minuteCouter').innerHTML = minute;
}

function start() {
  clear = setInterval(getvalue, 1000);
}

function stop() {
  clearInterval(clear);
}

speech = new SpeechSynthesisUtterance();
this.speech.lang = 'vi';
var contentToSpeak = '';
this.speech.text = '';
if (performance.navigation.type == 1) {

}
function myFunction(x) {
  var titleCover = document.getElementById('title_cover').innerHTML;
  var content = document.getElementsByClassName('contentToSpeak');
  for (var i = 0; i < content.length; i++) {
    contentToSpeak += content[i].innerHTML;
  }
  this.speech.text = titleCover + contentToSpeak;
  //this.speech.text = 'Chiều về thăm quê thăm lại kỉ niệm ngày xưa';
  if (x.classList == "fa fa-play") {
    if (window.speechSynthesis.paused == true) {
      window.speechSynthesis.resume();
      start();
    } else {
      window.speechSynthesis.speak(this.speech);
      start();
    }
  } else if (x.classList == "fa fa-play fa-pause") {
    window.speechSynthesis.pause();
    stop();
  }
  x.classList.toggle("fa-pause");
  var onend = this.speech.addEventListener('end', function (event) {
    x.classList = "fa fa-play";
    stop();
    document.getElementById('secondCouter').innerHTML = 0;
    document.getElementById('minuteCouter').innerHTML = 0;
  });
}

// End Speech
