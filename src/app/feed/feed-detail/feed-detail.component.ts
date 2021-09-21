import { Component, OnInit } from '@angular/core';
import {FeedItems} from "../model/feed-items";
import { ActivatedRoute, Router } from '@angular/router';
// import * as $ from 'jquery';
import {FeedService} from "../service/feed.service";
import {Image} from "../model/image";
// import { faCoffee, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faAlignJustify, faPlay, faThumbsUp, faNewspaper, faBell } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-feed-detail',
  templateUrl: './feed-detail.component.html',
  styleUrls: ['./feed-detail.component.css']
})
export class FeedDetailComponent implements OnInit {
  faThumbsUp = faThumbsUp;
  faPlay = faPlay;
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
  feedRecomment: any[] = [];
  contentCategory: FeedItems[] = [];
  rssFeed: any[]=[];
  constructor(private route: ActivatedRoute, private router: Router, private feedService: FeedService) {
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fban-doc.rss")
    .subscribe(value => {
      feedService.createListFeedItems(this.contentCategory, value);
    });
  }
  onSend(name: string){
    this.formData.append('name', name);
  }

  ngOnInit(): void {
    let url: any;
    const param = this.route.snapshot.paramMap;
    const link = param.get('link');
    const title = param.get('title');
    url = link;
    var a = Math.floor(Math.random() * 14);
    this.rssFeed = [
      {category: "Tin mới nhất", link: "https://nld.com.vn/tin-moi-nhat.rss"},
      {category: "Thời sự", link: "https://nld.com.vn/thoi-su.rss"},
      {category: "Quốc tế", link: "https://nld.com.vn/thoi-su-quoc-te.rss"},
      {category: "Công đoàn", link: "https://nld.com.vn/cong-doan.rss"},
      {category: "Bạn đọc", link: "https://nld.com.vn/ban-doc.rss"},
      {category: "Kinh tế", link: "https://nld.com.vn/kinh-te.rss"},
      {category: "Sức khoẻ", link: "https://nld.com.vn/suc-khoe.rss"},
      {category: "Giáo dục", link: "https://nld.com.vn/giao-duc.rss"},
      {category: "Pháp luật", link: "https://nld.com.vn/phap-luat.rss"},
      {category: "Giải trí", link: "https://nld.com.vn/gia-tri.rss"},
      {category: "Thể thao", link: "https://nld.com.vn/the-thao.rss"},
      {category: "Công nghệ", link: "https://nld.com.vn/cong-nghe.rss"},
      {category: "Điểm đến", link: "https://nld.com.vn/diem-den.rss"},
      {category: "Lý tưởng sống", link: "https://nld.com.vn/ly-tuong-song.rss"},
      {category: "Nói thẳng", link: "https://nld.com.vn/noi-thang.rss"},
      {category: "Tin độc quyền", link: "https://nld.com.vn/tin-doc-quyen.rss"},
      {category: "Địa ốc", link: "https://nld.com.vn/dia-oc.rss"},
      {category: "Thị trường", link: "https://nld.com.vn/thi-truong.rss"},
    ];
    this.formData.append("category",this.rssFeed[a].category)
    console.log(this.rssFeed[a].link);
    this.feedService.onSendLoadData(this.formData).subscribe(
      res=>{
        this.feedService.loadDataFeed(this.feedRecomment, res);
      }
    )

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
    this.title = title;
    // console.log('content');
    // console.log(this.content);

  }


}



