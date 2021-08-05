import { Component, OnInit } from '@angular/core';
import {FeedItems} from "../model/feed-items";
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import {FeedService} from "../service/feed.service";



@Component({
  selector: 'app-feed-detail',
  templateUrl: './feed-detail.component.html',
  styleUrls: ['./feed-detail.component.css']
})
export class FeedDetailComponent implements OnInit {
  product: FeedItems;
  dataContent: string[];
  image: any[];
  title: string;
  url: string;
  response = "";
  content : string[] = [];
  imageSrc: string[] = [];
  imageAlt: string[] = [];
  formData: FormData = new FormData();

  constructor(private route: ActivatedRoute, private router: Router, private feedService: FeedService) {
    let url: any;
    const param = this.route.snapshot.paramMap;
    const link = param.get('link');
    url = link;
    console.log(url);

    this.onSend(url);
    this.feedService.onSendService(this.formData).subscribe(
      res =>{
        this.feedService.formatData(this.title, this.content, this.imageSrc, this.imageAlt, res);
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
    var array = ["g", "g", "h"];
    array.push("t");
    // console.log(array);


  }

  }



