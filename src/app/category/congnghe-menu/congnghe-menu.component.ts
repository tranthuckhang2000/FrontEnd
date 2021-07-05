import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-congnghe-menu',
  templateUrl: './congnghe-menu.component.html',
  styleUrls: ['./congnghe-menu.component.css']
})
export class CongngheMenuComponent implements OnInit {

  title?: string;
  title1?: string;
  title2?: string;
  image?: string;
  title3?: string;
  content?: string;
  listItem: any;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Khám phá ứng dụng nhắc đeo khẩu trang, Kiểm soát cách ly tại nhà';
    this.content = '(NLĐO) - Công ty TNHH MTV Phát triển Công viên phần mềm Quang Trung (QTSC) đã phối hợp với Công ty TMA Innovation nghiên cứu và phát triển, đưa vào ứng dụng trong thực tế nhằm sàng lọc người nghi nhiễm Covid-19.';
    this.title1 = 'Ví AirPay đổi tên thành ShopeePay, gia tăng nhận diện thương hiệu';
    this.title2 = 'Đằng sau cơn sốt ví điện tử ở Trung Quốc';
    this.title3 = '6 lý do ví ShopeePay được người dùng yêu thích';
    this.image = './assets/images/congnghe.png';
    this.listItem = [1, 2, 3, 4, 5];
  }

}
