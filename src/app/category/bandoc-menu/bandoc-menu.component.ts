import { Component, OnInit } from '@angular/core';
import {FeedService} from "../../feed/service/feed.service";
import {FeedItems} from "../../feed/model/feed-items";

@Component({
  selector: 'app-bandoc-menu',
  templateUrl: './bandoc-menu.component.html',
  styleUrls: ['./bandoc-menu.component.css']
})
export class BandocMenuComponent implements OnInit {
  // @ts-ignore
  feed = new FeedService();
  data: FeedItems[];
  data2: FeedItems[];
  data3: FeedItems[];
  TitleArrTNB: any;
  ImgArrTNB: any;
  title: string;
  arrnew: any = [1,2,3,4,5,6,7,8,9,10];
  titleXN: string = 'Khánh Hòa: Xuất hiện ca dương tính với SARS-CoV-2';
  constructor(feedService: FeedService) {
    this.data = [];
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fban-doc.rss")
      .subscribe(value => {
        feedService.createListFeedItems(this.data,value);
      });
    this.data2 = [];
    feedService.getDataRss(" https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Ftin-moi-nhat.rss")
      .subscribe(value => {
        feedService.createListFeedItems(this.data2,value);
      });
    this.data3 = [];
    feedService.getDataRss("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fthoi-su.rss")
      .subscribe(value => {
        feedService.createListFeedItems(this.data3,value);
      });

  }
  ngOnInit(): void {
    this.TitleArrTNB = ['Ông Nguyễn Thành Phong tiếp tục được bầu làm Chủ tịch UBND TP HCM',
      'Ông Nguyễn Thành Phong tiếp tục được bầu làm Chủ tịch UBND TP HCM',
      'Ông Nguyễn Thành Phong tiếp tục được bầu làm Chủ tịch UBND TP HCM',
      'Ông Nguyễn Thành Phong tiếp tục được bầu làm Chủ tịch UBND TP HCM',
      'Ông Nguyễn Thành Phong tiếp tục được bầu làm Chủ tịch UBND TP HCM',
      'Ông Nguyễn Thành Phong tiếp tục được bầu làm Chủ tịch UBND TP HCM',
      'Ông Nguyễn Thành Phong tiếp tục được bầu làm Chủ tịch UBND TP HCM',
      'Ông Nguyễn Thành Phong tiếp tục được bầu làm Chủ tịch UBND TP HCM',
      'Ông Nguyễn Thành Phong tiếp tục được bầu làm Chủ tịch UBND TP HCM',
      'Ông Nguyễn Thành Phong tiếp tục được bầu làm Chủ tịch UBND TP HCM',
      'Ông Nguyễn Thành Phong tiếp tục được bầu làm Chủ tịch UBND TP HCM',
    ];
    this.ImgArrTNB = ['https://nld.mediacdn.vn/zoom/216_133/291774122806476800/2021/6/24/base64-16245077392541905338107.png'];
  }

}
