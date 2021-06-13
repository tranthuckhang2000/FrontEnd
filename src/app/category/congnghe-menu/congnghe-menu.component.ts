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
    this.title = 'Thơ Nguyễn lại mở kênh Youtobe mới';
    this.content = '(NLĐO) - Sau khi bị xử phạt vì đăng clip nội dung mê tín dị đoan không lâu, Thơ Nguyễn đã mở kênh YouTube mới với tên Thơ Lơ Mơ.';
    this.title1 = 'Ví AirPay đổi tên thành ShopeePay, gia tăng nhận diện thương hiệu';
    this.title2 = 'Đằng sau cơn sốt ví điện tử ở Trung Quốc';
    this.title3 = '6 lý do ví ShopeePay được người dùng yêu thích';
    this.image = './assets/images/diemden.jpg';
    this.listItem = [1, 2, 3, 4, 5];
  }

}
