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
   
  constructor(private feedService: FeedService, private http: HttpClient) {
    this.test = [
      {title: "trong nước", link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fthoi-su.rss"},
      {title: "công đoàn", link: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fcong-doan.rss "},
      {title: "quốc tế", link: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fthoi-su-quoc-te.rss "},
      {title: "bạn đọc", link: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fban-doc.rss "},
      {title: "kinh tế", link: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fkinh-te.rss "},
      {title: "sức khỏe", link: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fsuc-khoe.rss "},
      {title: "giáo dục", link: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fgiao-duc.rss "},
      {title: "pháp luật", link: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fphap-luat.rss "},
      {title: "giải trí", link: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fgiai-tri.rss "},
      {title: "thể thao", link: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fthe-thao.rss "},
      {title: "công nghệ", link: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fcong-nghe.rss "},
      {title: "phụ nữ", link: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fphu-nu.rss "},
      {title: "địa ốc", link: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fdia-oc.rss "},
      {title: "điểm đến", link: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fdiem-den.rss "},,
    ]
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fban-doc.rss")
    .subscribe(value => {
      feedService.createListFeedItems(this.newsFeed, value);
    });
    feedService.getDataRss(" https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fthoi-su-quoc-te.rss")
    .subscribe(value => {
      feedService.createListFeedItems(this.nationalFeed,value);
    });
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fcong-doan.rss")
    .subscribe(value => {
      feedService.createListFeedItems(this.unionFeed,value);
    });
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fcong-nghe.rss")
    .subscribe(value => {
      feedService.createListFeedItems(this.techniqueFeed, value);
    });
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fdia-oc.rss")
    .subscribe(value => {
      feedService.createListFeedItems(this.estateFeed, value);
    });
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fdiem-den.rss")
    .subscribe(value => {
      feedService.createListFeedItems(this.destinationFeed, value);
    });
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fgiai-tri.rss")
    .subscribe(value => {
      feedService.createListFeedItems(this.relaxFeed, value);
    });
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fgiao-duc.rss")
    .subscribe(value => {
      // console.log(value.items[0].link);
      this.link = value.items[0].link;
      // console.log(this.link)
      // this.onSend(this.link);
      // console.log('link: ' + this.link);
      this.feedService.onSendService(this.formData).subscribe(
        res =>{
          this.cover = res.content[0]
          // console.log(this.cover);
        },
        error => {
          console.log(error);
        }
      )
      feedService.createListFeedItems(this.eduFeed, value);
    });

  
   }

   onSend(name: string){
    this.formData.append('name', name);
  }
  

  ngOnInit(): void {

  }

}
