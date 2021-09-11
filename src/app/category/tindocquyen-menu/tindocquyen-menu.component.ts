import { Component, OnInit } from '@angular/core';
import {FeedService} from "../../feed/service/feed.service";
import {FeedItems} from "../../feed/model/feed-items";

@Component({
  selector: 'app-tindocquyen-menu',
  templateUrl: './tindocquyen-menu.component.html',
  styleUrls: ['./tindocquyen-menu.component.css']
})
export class TindocquyenMenuComponent implements OnInit {
// @ts-ignore
  feed = new FeedService();
  data: FeedItems[] = [];
  data2: FeedItems[];
  data3: FeedItems[];
  constructor(feedService: FeedService) {
    this.data = [];
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Ftin-doc-quyen.rss")
      .subscribe(value => {
        feedService.createListFeedItems(this.data,value);
      });
    this.data2 = [];
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Ftin-moi-nhat.rss")
      .subscribe(value => {
        feedService.createListFeedItems(this.data2,value);
      });
    this.data3 = [];
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fthoi-su.rss")
      .subscribe(value => {
        feedService.createListFeedItems(this.data3,value);
      });

  }
  ngOnInit(): void {
  }
}
