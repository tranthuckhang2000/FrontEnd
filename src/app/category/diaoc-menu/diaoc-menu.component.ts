import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diaoc-menu',
  templateUrl: './diaoc-menu.component.html',
  styleUrls: ['./diaoc-menu.component.css']
})
export class DiaocMenuComponent implements OnInit {

  title?: string;
  title1?: string;
  title2?: string;
  image?: string;
  title3?: string;
  content?: string;
  listItem: any;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Một dự án BĐS đẳng cấp sắp xuất hiện tại Thanh Hóa'
    this.content='Giới đầu tư địa ốc đang xôn xao trước một số thông tin rò rỉ cho thấy nhiều khả năng Sunshine Homes - nhà phát triển BĐS chuyên nghiệp của Sunshine Group - sẽ đổ bộ vào Thanh Hóa với một siêu dự án hạng sang, trở thành cú huých...';
    this.title1 ='SonKim Land vừa hoàn thành giai đoạn 1 của dự án Metropole Thủ Thiêm - The Galleria Residence, bắt đầu​​ bàn giao từ tháng 7 năm 2021. Đây là dấu mốc quan trọng không chỉ của dự án mà còn của SonKim Land, thể hiện cam kết của công ty trong việc mang đến những giá trị tốt nhất cho khách';
    this.title3 = 'SonKim Land chính thức bàn giao The Galleria Residence';
    this.image = './assets/images/diaoc.jpg';
    this.listItem = [1,2,3,4,5];
  }

}
