import {Component, OnInit} from '@angular/core';
import {FeedService} from "./feed/service/feed.service";
import {Data} from "./feed/model/data";
import {FeedItems} from "./feed/model/feed-items";


@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: '<router-outlet></router-outlet>',
  // template: '<app-home2></app-home2>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FrontEnd';
  // @ts-ignore
  feed = new FeedService();
  data2: FeedItems[];
  constructor(feedService: FeedService) {
    this.data2 = [];
    feedService.getData();
    feedService.getDataRss('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fban-doc.rss')
      .subscribe(value => {
        feedService.createListFeedItems(this.data2, value);
        // console.log('data2: ' + this.data2[9].title);
        // for (const [k, v] of Object.entries(value)) {
        //   this.data2.push(v);
        //   console.log(value);
          // for(const[i, j] of Object.entries(k)){
          //   console.log(i + ": " + j)
          // }
        // }
        // console.log(value);
      });
    console.log(this.data2)

  }

  ngOnInit(): void {

  }
}
