import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imgLink: string;
  title: string;
  content: string;
  tinnong: string = 'Tới lượt Mỹ bị điều tra về nguồn gốc dịch Covid-19?';
  listItem: any = [1,2,3,4,5,6];
  listItem2: any = [1,2,3,4];
  listItem3: any = [1,2,3];

  image: string = './assets/images/big_trump.jpg';
  constructor() { }

  ngOnInit(): void {
    this.imgLink = 'https://nld.mediacdn.vn/zoom/544_340/291774122806476800/2021/6/17/benh1a-1623886031186410911854.jpg';
    this.title = 'Sáng 17-6, thêm 158 ca mắc Covid-19 trong nước, TP HCM có 45 ca';
    this.content = '(NLĐO) - Sáng nay 17-6 ghi nhận thêm 159 ca Covid-19, gồm 1 ca nhập cảnh và 158 ca trong nước. Ngoài các điểm nóng Bắc Giang 87 ca, TP HCM 45 ca, ' +
      'Tiền Giang và Bình Dương cũng phát hiện thêm nhiều ca bệnh với lần lượt 11 và 7 ca.';

  }

}
