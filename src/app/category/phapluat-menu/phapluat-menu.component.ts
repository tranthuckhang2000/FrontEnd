import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phapluat-menu',
  templateUrl: './phapluat-menu.component.html',
  styleUrls: ['./phapluat-menu.component.css']
})
export class PhapluatMenuComponent implements OnInit {

  title?: string;
  title1?: string;
  title2?: string;
  image?: string;
  title3?: string;
  content?: string;
  listItem: any;

  constructor() { }

  ngOnInit(): void {
    this.title = '"Hotgirl bún bò Huế" 21 tuổi mua bán ma túy: Bắt thêm 2 nghi phạm'
    this.content='(NLĐO)- Mở rộng điều tra đường dây buôn bán trái phép ma tuý của "hotgirl" Trần Thị Diệu Huyền (21 tuổi, chủ quán bánh canh cá lóc và bún bò giò Huế), công an tiếp tục bắt giữ thêm 2 nghi phạm.';
    this.title1 ='Thanh niên đâm nữ nhân viên cửa hàng quần áo, cướp tài sản ở Thủ Đức khai gì>';
    this.title2 = '3 thanh niên ném bom xăng gây cháy shop quần áo, chủ cửa hàng bỏng nặng';
    this.title3 = 'Cầm dao chọc tiết lợn xông vào cửa hàng cướp 3 chiếc áo và chân váy tặng bạn gái';
    this.image = './assets/images/phapluat.jpg';
    this.listItem = [1,2,3,4,5];
  }

}
