import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vannghe-menu',
  templateUrl: './vannghe-menu.component.html',
  styleUrls: ['./vannghe-menu.component.css']
})
export class VanngheMenuComponent implements OnInit {

  title?: string;
  title1?: string;
  title2?: string;
  image?: string;
  title3?: string;
  content?: string;
  listItem: any;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Rộng lòng với người nghèo khó';
    this.content='Ở TP HCM, làm việc nghĩa cũng tự nhiên như nắng phương Nam, nắng tỏa đến đâu, hơi ấm lan đến đấy, người này theo gương người kia';
    this.title1 ='NSƯT Đức Hải sẽ bị xử lý nếu thực sự đã phát ngôn gây "bão"';
    this.title2 = 'Minh Nhí, Đức Hải “trả đũa” Hồng Vân, Thanh Thủy';
    this.title3 = 'NSƯT Đức Hải bị miễn nhiệm chức phó hiệu trưởng sau những lùm xùm trên mạng xã hội';
    this.image = './assets/images/vannghe.jpg';
    this.listItem = [1,2,3,4,5];
  }

}
