import { Component, OnInit } from '@angular/core';
import {FeedService} from "./shared/feed.service";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  feedService = new FeedService();

  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    this.feedService.getDataRss();

  }

}
