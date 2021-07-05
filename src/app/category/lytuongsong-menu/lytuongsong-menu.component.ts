import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lytuongsong-menu',
  templateUrl: './lytuongsong-menu.component.html',
  styleUrls: ['./lytuongsong-menu.component.css']
})
export class LytuongsongMenuComponent implements OnInit {

  title?: string;
  title1?: string;
  title2?: string;
  image?: string;
  title3?: string;
  content?: string;
  listItem: any;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Báo chí bảo vệ quyền lợi nhân dân'
    this.content='Trong quá trình lãnh đạo cách mạng, Đảng ta luôn chú trọng quan tâm đến báo chí, truyền thông; xem đây là phương tiện chuyển tải quan trọng trong việc triển khai chủ trương, đường lối, nghị quyết của Đảng đến mỗi cán bộ, đảng viên và quần chúng nhân dân.';
    this.title1 ='Khen thưởng hướng về người lao động trực tiếp';
    this.title2 = 'Năng động trong vai trò thủ lĩnh';
    this.title3 = 'Gắn học tập với thực tiễn rèn luyện';
    this.image = './assets/images/lytuong.jpg';
    this.listItem = [1,2,3,4,5];
  }

}
