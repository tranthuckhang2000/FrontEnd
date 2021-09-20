import { Component, OnInit } from '@angular/core';
import {FeedService} from "../feed/service/feed.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FeedRss} from "../feed/model/feed-rss";

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {
  formData: FormData = new FormData();
  dataSearch: any[] = [];
  title: any = "";
  constructor(private route: ActivatedRoute, private router: Router, private feedService: FeedService) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      // this.link = params.get('link');
      this.title = params.get('title');
      console.log('category:' + this.title);
      this.formData.append('title', this.title);
      this.feedService.onSendSearch(this.formData).subscribe(
        res => {
          console.log(res);
          this.dataSearch = [];
          this.feedService.loadDataFeed(this.dataSearch, res);
          // console.log("data finding")
          // console.log(res);

        },
        error => {

        }
      )

    })
  }

}
