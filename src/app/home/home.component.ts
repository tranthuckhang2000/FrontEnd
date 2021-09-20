import { Component, OnInit} from '@angular/core';
import {FeedService} from "../feed/service/feed.service";
import {FeedItems} from "../feed/model/feed-items";
import {Image} from "../feed/model/image";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from '@angular/router';

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
  content : string[] = [];
  imageSrc: string[] = [];
  imageAlt: string[] = [];
  imageArray: Image[] = [];
  test: any[] = [];
  formData: FormData = new FormData();
  title: "Tin mới";
  link: string = "";

  rssFeed: any[] = [];

  constructor(private feedService: FeedService, private http: HttpClient) {
    // this.test = [
    //   {title: "trong nước", link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fthoi-su.rss"},
    //   {title: "công đoàn", link: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fcong-doan.rss "},
    //   {title: "quốc tế", link: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fthoi-su-quoc-te.rss "},
    //   {title: "bạn đọc", link: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fban-doc.rss "},
    //   {title: "kinh tế", link: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fkinh-te.rss "},
    //   {title: "sức khỏe", link: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fsuc-khoe.rss "},
    //   {title: "giáo dục", link: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fgiao-duc.rss "},
    //   {title: "pháp luật", link: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fphap-luat.rss "},
    //   {title: "giải trí", link: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fgiai-tri.rss "},
    //   {title: "thể thao", link: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fthe-thao.rss "},
    //   {title: "công nghệ", link: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fcong-nghe.rss "},
    //   {title: "phụ nữ", link: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fphu-nu.rss "},
    //   {title: "địa ốc", link: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fdia-oc.rss "},
    //   {title: "điểm đến", link: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fdiem-den.rss "},,
    // ]
    // feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fban-doc.rss")
    // .subscribe(value => {
    //   feedService.createListFeedItems(this.newsFeed, value);
    // });
    // feedService.getDataRss(" https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fthoi-su-quoc-te.rss")
    // .subscribe(value => {
    //   feedService.createListFeedItems(this.nationalFeed,value);
    // });
    // feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fcong-doan.rss")
    // .subscribe(value => {
    //   feedService.createListFeedItems(this.unionFeed,value);
    // });
    // feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fcong-nghe.rss")
    // .subscribe(value => {
    //   feedService.createListFeedItems(this.techniqueFeed, value);
    // });
    // feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fdia-oc.rss")
    // .subscribe(value => {
    //   feedService.createListFeedItems(this.estateFeed, value);
    // });
    // feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fdiem-den.rss")
    // .subscribe(value => {
    //   feedService.createListFeedItems(this.destinationFeed, value);
    // });
    // feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fgiai-tri.rss")
    // .subscribe(value => {
    //   feedService.createListFeedItems(this.relaxFeed, value);
    // });
    // feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fgiao-duc.rss")
    // .subscribe(value => {
    //   // console.log(value.items[0].link);
    //   this.link = value.items[0].link;
    //   // console.log(this.link)
    //   this.onSend(this.link);
    //   // console.log('link: ' + this.link);
    //   this.feedService.onSendService(this.formData).subscribe(
    //     res =>{
    //       this.cover = res.content[0]
    //       // console.log('cover: ' + this.cover);
    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   )
    //   feedService.createListFeedItems(this.eduFeed, value);
    // });

   }

   onSend(name: string){
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
    ]
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

    this.formData.append('category', 'tin mới nhất');
    this.feedService.onSendLoadData(this.formData).subscribe(
      res => {
        this.feedService.loadDataFeed(this.newsFeed, res);
        console.log("tin moi nhat");
        console.log(this.newsFeed[0].title);
        // console.log(res);
      },
      error => {
        console.log(error);
      }
    );
    this.formData.append('category', 'giáo dục');
    this.feedService.onSendLoadData(this.formData).subscribe(
      res => {
        this.feedService.loadDataFeed(this.newsFeed, res);
        console.log(this.eduFeed);
      },
      error => {
        // console.log(error);
      }
    );

    this.formData.append('category', 'công đoàn');
    this.feedService.onSendLoadData(this.formData).subscribe(
      res => {
        this.feedService.loadDataFeed(this.unionFeed, res);
        console.log(this.eduFeed);
      },
      error => {
        // console.log(error);
      }
    );
    this.formData.append('category', 'giáo dục');
    this.feedService.onSendLoadData(this.formData).subscribe(
      res => {
        this.feedService.loadDataFeed(this.eduFeed, res);
        console.log('giáo dục: ')
        console.log(res);
      },
      error => {
        // console.log(error);
      }
    );

    this.formData.append('category', 'công nghệ');
    this.feedService.onSendLoadData(this.formData).subscribe(
      res => {
        this.feedService.loadDataFeed(this.techniqueFeed, res);
      },
      error => {
        // console.log(error);
      }
    );
    this.formData.append('category', 'địa ốc');
    this.feedService.onSendLoadData(this.formData).subscribe(
      res => {
        this.feedService.loadDataFeed(this.estateFeed, res);
      },
      error => {
        // console.log(error);
      }
    );

    this.formData.append('category', 'giải trí');
    this.feedService.onSendLoadData(this.formData).subscribe(
      res => {
        this.feedService.loadDataFeed(this.relaxFeed, res);
      },
      error => {
        // console.log(error);
      }
    );
    this.formData.append('category', 'điểm đến');
    this.feedService.onSendLoadData(this.formData).subscribe(
      res => {
        this.feedService.loadDataFeed(this.destinationFeed, res);
      },
      error => {
        // console.log(error);
      }
    );



  }

}
