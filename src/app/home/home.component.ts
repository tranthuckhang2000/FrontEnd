import {Component, OnInit} from '@angular/core';
import {FeedService} from "../feed/service/feed.service";
import {FeedItems} from "../feed/model/feed-items";
import {Image} from "../feed/model/image";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newsFeed: FeedItems[] = [];
  nationalFeed: FeedItems[] = [];
  topFeed: FeedItems[] = [];
  unionFeed: FeedItems[] = [];
  techniqueFeed: FeedItems[] = [];
  estateFeed: FeedItems[] = [];
  destinationFeed: FeedItems[] = [];
  relaxFeed: FeedItems[] = [];
  eduFeed: FeedItems[] = [];
  EconomyFeed: FeedItems[] = [];
  lifeFeed: FeedItems[] = [];
  talkFeedItem: FeedItems[] = [];
  lawFeed: FeedItems[] = [];
  womenFeed: FeedItems[] = [];
  healthFeed: FeedItems[] = [];
  sportFeed: FeedItems[] = [];
  businessFeed: FeedItems[] = [];
  monopolyFeed: FeedItems[] = [];
  internalFeed: FeedItems[] = [];
  cover: any;
  content: string[] = [];
  imageSrc: string[] = [];
  imageAlt: string[] = [];
  imageArray: Image[] = [];
  test: any[] = [];
  formData: FormData = new FormData();
  title: "Tin mới";
  link: string = "";
  rssFeed: any[] = [];
  arrayFeedHome: any[] = [];

  constructor(private feedService: FeedService, private http: HttpClient) {
  }

  onSend(name: string) {
    this.formData.append('name', name);
  }

  ngOnInit(): void {
    this.rssFeed = [
      {category: "Tin mới nhất", link: "https://nld.com.vn/tin-moi-nhat.rss"},
      {category: "Thời sự", link: "https://nld.com.vn/thoi-su.rss"},
      {category: "Quốc tế", link: "https://nld.com.vn/thoi-su-quoc-te.rss"},
      {category: "Công đoàn", link: "https://nld.com.vn/cong-doan.rss"},
      {category: "Bạn đọc", link: "https://nld.com.vn/ban-doc.rss"},
      {category: "Kinh tế", link: "https://nld.com.vn/kinh-te.rss"},
      {category: "Sức khoẻ", link: "https://nld.com.vn/suc-khoe.rss"},
      {category: "Giáo dục", link: "https://nld.com.vn/giao-duc.rss"},
      {category: "Pháp luật", link: "https://nld.com.vn/phap-luat.rss"},
      {category: "Giải trí", link: "https://nld.com.vn/gia-tri.rss"},
      {category: "Thể thao", link: "https://nld.com.vn/the-thao.rss"},
      {category: "Công nghệ", link: "https://nld.com.vn/cong-nghe.rss"},
      {category: "Điểm đến", link: "https://nld.com.vn/diem-den.rss"},
      {category: "Lý tưởng sống", link: "https://nld.com.vn/ly-tuong-song.rss"},
      {category: "Nói thẳng", link: "https://nld.com.vn/noi-thang.rss"},
      {category: "Tin độc quyền", link: "https://nld.com.vn/tin-doc-quyen.rss"},
      {category: "Địa ốc", link: "https://nld.com.vn/dia-oc.rss"},
      {category: "Thị trường", link: "https://nld.com.vn/thi-truong.rss"},
    ];
    // update new feed for all category
    // for(let i = 0; i < this.rssFeed.length; i++){
    //   this.formData.append('link', this.rssFeed[i].link);
    //   this.formData.append('category', this.rssFeed[i].category);
    //   this.feedService.onSendRssFeed(this.formData).subscribe(
    //     res => {
    //     console.log(res);
    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   );
    // }

    // data for home
    this.arrayFeedHome = [
      {array: this.newsFeed, category: "Tin mới nhất"},
      {array: this.unionFeed, category: "Công đoàn"},
      {array: this.relaxFeed, category: "Giải trí"},
      {array: this.eduFeed, category: "Giáo dục"},
      {array: this.techniqueFeed, category: "Công nghệ"},
      {array: this.estateFeed, category: "Địa ốc"},
      {array: this.destinationFeed, category: "Điểm đến"}
    ];
    // Load data for home
    this.arrayFeedHome.forEach(feed => {
      this.formData.append('category', feed.category);
      this.feedService.onSendLoadData(this.formData).subscribe(
        res => {
          this.feedService.loadDataFeed(feed.array, res);
          console.log(feed.array);


        },
        error => {
          console.log(error);
        }
      );
    })
    // console.log("feed")
    // console.log(this.unionFeed);
  }
    ;




  }


