import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FeedService} from "../../feed/service/feed.service";
import {FeedItems} from "../../feed/model/feed-items";
import {FeedRss} from "../../feed/model/feed-rss";
@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  title: any;
  link: any;
  category: any;
  data: FeedItems[] = [];
  data2: FeedItems[] = [];
  data3: FeedItems[] = [];
  feedRss1: FeedRss[]= [];
  feedRss2: FeedRss[]= [];
  feedRss3: FeedRss[]= [];
  formData: FormData = new FormData();
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
     // this.link = params.get('link');
     this.category = params.get('category');
      console.log('category:' + this.category);
      this.formData.append('category', this.category);
      this.formData.append(this.category, this.link);
      this.feedService.onSendLoadData(this.formData).subscribe(
        res => {
          this.feedRss1 = [];
          this.feedService.loadDataFeed(this.feedRss1, res);
          console.log(this.feedRss1);
        },
        error => {
          // console.log(error);
        }
      );
      this.category = params.get('category');
      this.formData.append('category', 'Công đoàn');
      this.formData.append(this.category, this.link);
      this.feedService.onSendLoadData(this.formData).subscribe(
        res => {
          this.feedRss2 = [];
          this.feedService.loadDataFeed(this.feedRss2, res);
        },
        error => {
          // console.log(error);
        }
      );
      this.category = params.get('category');
      this.formData.append('category', 'thời sự');
      this.formData.append(this.category, this.link);
      this.feedService.onSendLoadData(this.formData).subscribe(
        res => {
          this.feedRss3 = [];
          this.feedService.loadDataFeed(this.feedRss3, res);
        },
        error => {
          // console.log(error);
        }
      );
    })
  }


// }

}
