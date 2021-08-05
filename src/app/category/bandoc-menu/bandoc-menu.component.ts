import { Component, OnInit } from '@angular/core';
import {FeedService} from "../../feed/service/feed.service";
import {FeedItems} from "../../feed/model/feed-items";

@Component({
  selector: 'app-bandoc-menu',
  templateUrl: './bandoc-menu.component.html',
  styleUrls: ['./bandoc-menu.component.css']
})
export class BandocMenuComponent implements OnInit {
  data: FeedItems[];
  // @ts-ignore
  feed = new FeedService();
  data2: FeedItems[];
  data3: FeedItems[];
  response = "";
  linkDetailnew: string;
  title: string;
  arrnew: any = [1,2,3,4,5,6,7,8,9,10];
  constructor(private feedService: FeedService) {
    this.data = [];
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fban-doc.rss")
      .subscribe(value => {
        feedService.createListFeedItems(this.data,value);
      });
    this.data2 = [];
    feedService.getDataRss(" https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Ftin-moi-nhat.rss")
      .subscribe(value => {
        feedService.createListFeedItems(this.data2,value);
      });
    this.data3 = [];
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fthoi-su.rss")
      .subscribe(value => {
        feedService.createListFeedItems(this.data3,value);
      });

  }
  onSend(name: string){
    const formData : FormData = new FormData();
    formData.append('name', name);
    this.feedService.onSendService(formData).subscribe(
      res =>{
        console.log(res);
        this.response = res;
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
  }

}
