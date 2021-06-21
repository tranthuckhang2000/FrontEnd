import {Component, OnInit} from '@angular/core';
import {FeedService} from "./feed/service/feed.service";
import {Data} from "./feed/model/data";


@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: '<app-feed></app-feed>',
  // template: '<app-feed ></app-feed>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FrontEnd';



  constructor() {

  }

  ngOnInit(): void {
  }
}
