import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thethao-menu',
  templateUrl: './thethao-menu.component.html',
  styleUrls: ['./thethao-menu.component.css']
})
export class ThethaoMenuComponent implements OnInit {

  title?: string;
  title1?: string;
  title2?: string;
  image?: string;
  title3?: string;
  content?: string;
  listItem: any;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Tuyển Việt Nam rộng cửa vào vòng loại 3 nếu thắng Malaysia';
    this.content = 'Chiến thắng ấn tượng 4-0 trước đội tuyển Indonesia rạng sáng 8-6 đã giúp đội tuyển Việt Nam tiếp tục giữ vững ngôi đầu bảng G sau 6 lượt trận.';
    this.title1 = 'Brazil độc diễn vòng loại World Cup Nam Mỹ';
    this.title2 = 'World Cup 2022: Neymar tỏa sáng, Brazil vững ngôi đầu bảng Nam Mỹ';
    this.title3 = 'Neymar tung hoành sân cỏ, Brazil hạ chủ nhà Paraguay';
    this.image = './assets/images/thethao.jpg';
    this.listItem = [1, 2, 3, 4, 5];
  }
}
