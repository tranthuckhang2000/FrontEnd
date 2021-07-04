import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kinhte-menu',
  templateUrl: './kinhte-menu.component.html',
  styleUrls: ['./kinhte-menu.component.css']
})
export class KinhteMenuComponent implements OnInit {

  title?: string;
  title1?: string;
  title2?: string;
  image?: string;
  content?: string;
  listItem: any;
  constructor() { }

  ngOnInit(): void {
    this.title = 'Ông Trump rời "đại bản doanh" Florida, tuyên bố Mỹ đang tụt lùi';
    this.title1 ='Mỹ tấn công mạng, cài mã độc vào mạng lưới điện của Nga';
    this.title2 = 'Triều Tiên bất ngờ nói về vụ mã độc tống tiền';
    this.image = './assets/images/big_trump.jpg';
    this.content = '(NLĐO) – Trong bài phát biểu tại hội nghị đảng Cộng hòa Bắc Carolina năm 2021, Cựu Tổng thống Mỹ Donald Trump khẳng định nước Mỹ đang tụt lùi dưới thời Tổng thống Joe Biden.';
    this.listItem = [1,2,3,4,5];
  }

}
