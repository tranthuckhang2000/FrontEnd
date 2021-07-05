import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phunu-menu',
  templateUrl: './phunu-menu.component.html',
  styleUrls: ['./phunu-menu.component.css']
})
export class PhunuMenuComponent implements OnInit {

  title?: string;
  title1?: string;
  title2?: string;
  image?: string;
  title3?: string;
  content?: string;
  listItem: any;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Quy trình "May Vest Gấp 24h" tại Mon Amie Veston'
    this.content='Thông thường, để may một bộ veston, khách hàng sẽ phải chờ từ 7-14 ngày. Tuy nhiên, đối với những khách hàng cần gấp veston để tham dự một sự kiện quan trọng. Mon Amie vẫn sẽ ưu tiên lựa chọn dịch vụ "May Vest Gấp 24h" này cho bạn, mà không tính thêm bất kỳ phụ phí nào.';
    this.title1 ='Nhiều người thường có suy nghĩ rằng nâng mũi hỏng thì dễ sửa vì chỉ cần tháo silicon ra còn cắt mí mắt đã hỏng thì sửa rất khó. Tuy nhiên, thực tế có đơn giản như vậy?';
    this.title3 = '"Dao kéo" hỏng: Nỗi khổ của bệnh nhân và cái khó của bác sĩ';
    this.image = './assets/images/phunu.jpg';
    this.listItem = [1,2,3,4,5];
  }
}
