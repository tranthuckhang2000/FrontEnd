import { Component, OnInit} from '@angular/core';
import {FeedService} from "../feed/service/feed.service";
import {FeedItems} from "../feed/model/feed-items";
import {Image} from "../feed/model/image";


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
  formData: FormData = new FormData();
  title: "Tin mới";
  cover: any;
  content : string[] = [];
  imageSrc: string[] = [];
  imageAlt: string[] = [];
  imageArray: Image[] = [];

  image: string = './assets/images/big_trump.jpg';
  constructor(private feedService: FeedService) {
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
      feedService.createListFeedItems(this.eduFeed, value);
    });


    this.onSend("https://nld.com.vn/kinh-te/ket-noi-cung-cau-nong-thuy-san-giua-cac-tinh-thanh-dbscl-va-tp-hcm-202109132153034.htm");
    this.feedService.onSendService(this.formData).subscribe(
      res =>{
        this.feedService.formatData(this.title, this.content, this.imageArray, res);
        this.title = res.title;
        this.cover = res.cover;
      },
      error => {
        console.log(error);
      }
    )
   }


   onSend(name: string){
    this.formData.append('name', name);
  }

  ngOnInit(): void {

  }

}
