import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noithang-menu',
  templateUrl: './noithang-menu.component.html',
  styleUrls: ['./noithang-menu.component.css']
})
export class NoithangMenuComponent implements OnInit {

  title?: string;
  title1?: string;
  title2?: string;
  image?: string;
  title3?: string;
  content?: string;
  listItem: any;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Moi tắm lòng hãy vì TP HCM ruột thịt!'
    this.content='(NLĐO) - Nhiều tỉnh thành đã tạm "quên" những khó khăn của địa phương mình để chung tay hỗ trợ TP HCM chống dịch; ấm lòng xiết bao khi những bạn sinh viên trẻ ngành y từ tỉnh xa Hải Dương đến với thành phố nghĩa tình trong những ngày nơi đây là tâm dịch.';
    this.title1 ='NÓNG: Khởi tố vụ án làm gây lan dịch Covid-19 liên quan Hội Tin Lành truyền giáo Phục Hưng';
    this.title2 = 'Bác sĩ TP HCM "xuống tóc" trước giờ lên đường chi viện cho Bắc Giang';
    this.title3 = 'Họ xuống tóc vì ai?';
    this.image = './assets/images/noithang.jpeg';
    this.listItem = [1,2,3,4,5];
  }

}
