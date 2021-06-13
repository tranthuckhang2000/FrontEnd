import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diemden-menu',
  templateUrl: './diemden-menu.component.html',
  styleUrls: ['./diemden-menu.component.css']
})
export class DiemdenMenuComponent implements OnInit {
  title?: string;
  title1?: string;
  title2?: string;
  image?: string;
  title3?: string;
  content?: string;
  listItem: any;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Những món ăn trứ danh từ cua biển ngon nhất miền Tây';
    this.content = '(NLĐO) - Những món ăn được chế biến từ đặc sản cua biển ngon nhất miền Tây đã làm nao lòng nhiều thực khách khi đến với Cà Mau - vùng đất nằm ở cực Nam của Tổ quốc.';
    this.title1 = 'Thái Lan chính thức mở cửa đón du khách toàn thế giới';
    this.title2 = 'Du lịch Thái Lan bây giờ ra sao?';
    this.title3 = 'Phuket hấp dẫn du khách với chiến dịch 1 USD 1 đêm';
    this.image = './assets/images/diemden.jpg';
    this.listItem = [1, 2, 3, 4, 5];
  }

}
