import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FeedService} from "../../feed/service/feed.service";
import {FeedItems} from "../../feed/model/feed-items";
@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  title: any;
  link: any;
  data: FeedItems[] = [];
  data2: FeedItems[] = [];
  data3: FeedItems[] = [];
  constructor(private route: ActivatedRoute, private router: Router, private feedService: FeedService) {
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Ftin-moi-nhat.rss")
      .subscribe(value => {
        feedService.createListFeedItems(this.data2,value);
      });
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fthoi-su.rss")
      .subscribe(value => {
        feedService.createListFeedItems(this.data3,value);
      });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
     this.link = params.get('link');
     this.title = params.get('title');
      this.feedService.getDataRss(this.link)
        .subscribe(value => {
          this.data = []
          this.feedService.createListFeedItems(this.data,value);
          console.log(this.title)
          console.log(this.data)
        });
    })

  }
  // ngOnChanges(): void{
  //   this.route.paramMap.subscribe((params) => {
  //     // let url = ""
  //     // let param = this.route.snapshot.paramMap;
  //     this.link = params.get('link');
  //     this.feedService.getDataRss(this.link)
  //       .subscribe(value => {
  //         console.log(this.link)
  //         this.feedService.createListFeedItems(this.data,value);
  //       });
  //   })


// }

}
