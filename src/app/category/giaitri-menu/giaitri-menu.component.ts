import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giaitri-menu',
  templateUrl: './giaitri-menu.component.html',
  styleUrls: ['./giaitri-menu.component.css']
})
export class GiaitriMenuComponent implements OnInit {

  title?: string;
  title1?: string;
  title2?: string;
  image?: string;
  title3?: string;
  content?: string;
  listItem: any;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Kim Kardashian tiếp tục bị "ném đá" vì hở hang ở chốn trang nghiêm';
    this.content='(NLĐO) – Sao truyền hình thực tế Kim Kardashian tiếp tục bị một số công chúng “ném đá” vì cho rằng cô khuyến khích lách luật, thỏa mãn thói quen mặc hở hang bất chấp quy định chốn tôn nghiêm cần tuân thủ.';
    this.title1 ='Hậu sóng gió, Thu Thủy khoe bộ ảnh gia đình hạnh phúc';
    this.title2 = 'Đứng dậy sau đổ vỡ, ca sĩ Thu Thủy yêu lại từ đầu';
    this.title3 = 'Thu Thủy từng chịu "lời ra tiếng vào" về cuộc hôn nhân với chồng trẻ kém 10 tuổi';
    this.image = './assets/images/giaitri.jpg';
    this.listItem = [1,2,3,4,5];
  }
}
