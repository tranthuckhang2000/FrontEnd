import { Component, OnInit } from '@angular/core';
import {FeedService} from "../feed/service/feed.service";
import {FeedItems} from "../feed/model/feed-items";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // @ts-ignore
  feed = new FeedService();
  data: FeedItems[];
  data2: FeedItems[];
  data3: FeedItems[];
  data4:FeedItems[];
  data5:FeedItems[];
  data6:FeedItems[];
  data7:FeedItems[];
  data8:FeedItems[];
  data9:FeedItems[];
  data10:FeedItems[];
  data11:FeedItems[];
  data12:FeedItems[];
  data13:FeedItems[];
  data14:FeedItems[];
  data15:FeedItems[];
  data16:FeedItems[];
  TitleArrTNB: any;
  ImgArrTNB: any;
  title: string;
  arrnew: any = [1,2,3,4,5,6,7,8,9,10];
  titleXN: string = 'Khánh Hòa: Xuất hiện ca dương tính với SARS-CoV-2';
  constructor(feedService: FeedService) {
    this.data2 = [];
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Ftin-moi-nhat.rss")
      .subscribe(value => {
        feedService.createListFeedItems(this.data2,value)
      })
    this.data3 = [];
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fthoi-su.rss")
      .subscribe(value => {
        feedService.createListFeedItems(this.data3,value);
      });
    this.data4 = [];
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fthoi-su-quoc-te.rss")
      .subscribe(value => {
        feedService.createListFeedItems(this.data4,value);
      });
    this.data5 = [];
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fcong-doan.rss")
      .subscribe(value => {
        feedService.createListFeedItems(this.data5,value);
      });
    this.data6 = [];
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fban-doc.rss")
      .subscribe(value => {
        feedService.createListFeedItems(this.data6,value);
      });
    this.data7 = [];
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fkinh-te.rss")
      .subscribe(value => {
        feedService.createListFeedItems(this.data7,value);
      });
    this.data8 = [];
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fsuc-khoe.rss")
      .subscribe(value => {
        feedService.createListFeedItems(this.data8,value);
      });
    this.data9 = [];
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fgiao-duc-khoa-hoc.rss")
      .subscribe(value => {
        feedService.createListFeedItems(this.data9,value);
      });
    this.data10 = [];
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fphap-luat.rss")
      .subscribe(value => {
        feedService.createListFeedItems(this.data10,value);
      });
    this.data11 = [];
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fgiai-tri.rss")
      .subscribe(value => {
        feedService.createListFeedItems(this.data11,value);
      });
    this.data12 = [];
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fthe-thao.rss")
      .subscribe(value => {
        feedService.createListFeedItems(this.data12,value);
      });
    this.data13 = [];
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fcong-nghe.rss")
      .subscribe(value => {
        feedService.createListFeedItems(this.data13,value);
      });
    this.data14 = [];
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fdiem-den-hap-dan.rss")
      .subscribe(value => {
        feedService.createListFeedItems(this.data14,value);
      });
    this.data15 = [];
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fchuyen-trang-phu-nu.rss")
      .subscribe(value => {
        feedService.createListFeedItems(this.data15,value);
      });
    this.data16 = [];
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fthi-truong.rss")
      .subscribe(value => {
        feedService.createListFeedItems(this.data16,value);
      });
  }

  ngOnInit(): void {

  }

}
