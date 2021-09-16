import { Component, OnInit } from '@angular/core';
import {FeedItems} from "../model/feed-items";
import { ActivatedRoute, Router } from '@angular/router';
// import * as $ from 'jquery';
import {FeedService} from "../service/feed.service";
import {Image} from "../../model/image";
// import { faCoffee, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faAlignJustify, faPlay, faThumbsUp, faNewspaper, faBell } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-feed-detail',
  templateUrl: './feed-detail.component.html',
  styleUrls: ['./feed-detail.component.css']
})
export class FeedDetailComponent implements OnInit {
  faAlignJustify = faAlignJustify;
  faThumbsUp = faThumbsUp;
  faPlay = faPlay;
  faNewspaper = faNewspaper;
  faBell = faBell;
  product: FeedItems;
  dataContent: string[];
  image: any[];
  title: any;
  url: string;
  response = "";
  content : string[] = [];
  imageSrc: string[] = [];
  imageAlt: string[] = [];
  imageArray: Image[] = [];
  formData: FormData = new FormData();
  title_main: any;
  cover: any;

  constructor(private route: ActivatedRoute, private router: Router, private feedService: FeedService) {
    let url: any;
    const param = this.route.snapshot.paramMap;
    const link = param.get('link');
    const title = param.get('title');
    url = link;
    this.title = title;
    console.log(url);
    this.onSend(url);
    this.feedService.onSendService(this.formData).subscribe(
      res =>{
        this.feedService.formatData(this.title_main, this.content, this.imageArray, res);
        this.title_main = res.title;
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



