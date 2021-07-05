import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tindocquyen-menu',
  templateUrl: './tindocquyen-menu.component.html',
  styleUrls: ['./tindocquyen-menu.component.css']
})
export class TindocquyenMenuComponent implements OnInit {

  title?: string;
  title1?: string;
  title2?: string;
  image?: string;
  title3?: string;
  content?: string;
  listItem: any;

  constructor() { }

  ngOnInit(): void {
    this.title = 'SỐC: 2 cô gái khỏa thân trong quán karaoke ở TP Biên Hoà để phục vụ 20 khách'
    this.content='(NLĐO)- Bất chấp lệnh cấm karaoke của UBND tỉnh Đồng Nai, một quán karaoke tại TP Biên Hòa vẫn mở cửa đón 20 khách nam và cho nhân viên khỏa thân phục vụ.';
    this.title1 ='Vụ "kho báu" 1 tấn vàng: Người dân khắp nơi ùn ùn tới xem';
    this.title2 = 'Công an vào cuộc làm rõ thông tin khai thác trộm "kho báu" 1 tấn vàng';
    this.title3 = '3 ngư dân bất ngờ phát hiện "kho báu" kim loại dưới đáy biển Quảng Bình';
    this.image = './assets/images/tindocquyen.jpeg';
    this.listItem = [1,2,3,4,5];
  }
}
