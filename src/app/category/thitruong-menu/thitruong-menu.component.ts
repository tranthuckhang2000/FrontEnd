import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thitruong-menu',
  templateUrl: './thitruong-menu.component.html',
  styleUrls: ['./thitruong-menu.component.css']
})
export class ThitruongMenuComponent implements OnInit {

  title?: string;
  title1?: string;
  title2?: string;
  image?: string;
  title3?: string;
  content?: string;
  listItem: any;

  constructor() { }

  ngOnInit(): void {
    this.title ='Jonathan - Thương hiệu thời trang nam mang đến sự lịch lãm và hiện đại';
    this.content='Thương hiệu thời trang Jonathan nhận được rất nhiều sự quan tâm của khách hàng không chỉ có chất lượng tốt, thiết kế đẹp, bắt kịp xu hướng mà còn có dịch vụ chu đáo. Mỗi mẫu sản phẩm cung cấp cho khách hàng đều được Jonathan đầu tư từ chất đến lượng và luôn đạt chuẩn là mặt hàng cao cấp.';
    this.title1 ='“Dù giãn cách xã hội, nhưng nhà tôi vẫn đầy ắp thức ăn tươi ngon”, một nữ nhân viên văn phòng ở quận 3, TP HCM vui vẻ khoe với bạn bè.';
    this.title3 ='“Tránh chốn đông người – đi chợ vẫn tươi” cùng Satramart – Siêu thị Sài Gòn';
    this.image = './assets/images/thitruong.png';
    this.listItem = [1,2,3,4,5];
  }
}
