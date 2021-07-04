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
    this.title = 'Làm giả ảnh khỏa thân của sao, ngồi tù 4 năm';
    this.content='(NLĐO) - Một nam thanh niên 20 tuổi người Hàn Quốc đã bị tòa phán 4 năm tù giam vì tội ghép, làm giả 285 bức ảnh khỏa thân của hàng loạt người nổi tiếng và phát tán chúng trên các phòng chat mạng.';
    this.title1 ='Hậu sóng gió, Thu Thủy khoe bộ ảnh gia đình hạnh phúc';
    this.title2 = 'Đứng dậy sau đổ vỡ, ca sĩ Thu Thủy yêu lại từ đầu';
    this.title3 = 'Thu Thủy từng chịu "lời ra tiếng vào" về cuộc hôn nhân với chồng trẻ kém 10 tuổi';
    this.image = './assets/images/giaitri.png';
    this.listItem = [1,2,3,4,5];
  }

}
