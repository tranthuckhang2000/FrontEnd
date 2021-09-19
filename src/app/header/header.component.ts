import { Component, OnInit } from '@angular/core';
import {
  faHeart,
  faStar,
  faCommentAlt,
  faGlobeAmericas,
  faSearch,
  faHome,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faHeart = faHeart;
  faStar = faStar;
  faCommentAlt = faCommentAlt;
  faGlobeAmericas = faGlobeAmericas;
  faSearch = faSearch;
  faHome = faHome;
  faBars = faBars;
  faTimes = faTimes;
  categoryTop: any[] = [];
  categoryMid: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.categoryMid = [
      {
        title: 'trong nước',
        link: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fthoi-su.rss',
      },
      {
        title: 'công đoàn',
        link: ' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fcong-doan.rss ',
      },
      {
        title: 'quốc tế',
        link: ' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fthoi-su-quoc-te.rss ',
      },
      {
        title: 'bạn đọc',
        link: ' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fban-doc.rss ',
      },
      {
        title: 'kinh tế',
        link: ' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fkinh-te.rss ',
      },
      {
        title: 'sức khỏe',
        link: ' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fsuc-khoe.rss ',
      },
      {
        title: 'giáo dục',
        link: ' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fgiao-duc.rss ',
      },
      {
        title: 'pháp luật',
        link: ' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fphap-luat.rss ',
      },
      {
        title: 'giải trí',
        link: ' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fgiai-tri.rss ',
      },
      {
        title: 'thể thao',
        link: ' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fthe-thao.rss ',
      },
      {
        title: 'công nghệ',
        link: ' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fcong-nghe.rss ',
      },
      {
        title: 'phụ nữ',
        link: ' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fphu-nu.rss ',
      },
      {
        title: 'địa ốc',
        link: ' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fdia-oc.rss ',
      },
      {
        title: 'điểm đến',
        link: ' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fdiem-den.rss ',
      },
    ];
    this.categoryTop = [
      {
        title: 'lý tưởng sống',
        link: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fly-tuong-song.rss',
        icon: 'faHeart',
      },
      {
        title: 'độc quyền',
        link: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fdoc-quyen.rss',
        icon: 'faStart',
      },
      {
        title: 'nói thẳng',
        link: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fnoi-thang.rss',
        icon: 'faCommentAlt',
      },
      {
        title: 'thị trường',
        link: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fthi-truong.rss',
        icon: 'faGlobeAmericas',
      },
    ];
  }
}
