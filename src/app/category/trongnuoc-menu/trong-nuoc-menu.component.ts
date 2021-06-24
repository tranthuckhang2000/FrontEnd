import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trongnuoc_menu',
  templateUrl: './trong-nuoc-menu.component.html',
  styleUrls: ['./trong-nuoc-menu.component.css']
})
export class TrongNuocMenuComponent implements OnInit {
  TitleArrTNB: any;
  ImgArrTNB: any;

  TitleArr1: string = 'Bà Nguyễn Thị Lệ tái cử Chủ tịch HĐND TP HCM';
  TitleArr2: string = 'Tổng Giám đốc Nanogen nói về đề nghị cấp phép khẩn cấp cho vắc-xin Nanocovax';
  title: string = 'Ronaldo lập 3 kỷ lục, Bồ Đào Nha vào vòng 1/8 Euro 2020 chạm trán Bỉ';
  ImgArrNews: any;
  arrnew: any = [1,2,3,4,5,6,7,8,9,10];
  titleXN: string = 'Khánh Hòa: Xuất hiện ca dương tính với SARS-CoV-2';
  constructor() { }

  ngOnInit(): void {
    this.TitleArrTNB = ['Ông Nguyễn Thành Phong tiếp tục được bầu làm Chủ tịch UBND TP HCM',
      'Ông Nguyễn Thành Phong tiếp tục được bầu làm Chủ tịch UBND TP HCM',
      'Ông Nguyễn Thành Phong tiếp tục được bầu làm Chủ tịch UBND TP HCM',
      'Ông Nguyễn Thành Phong tiếp tục được bầu làm Chủ tịch UBND TP HCM',
      'Ông Nguyễn Thành Phong tiếp tục được bầu làm Chủ tịch UBND TP HCM',
      'Ông Nguyễn Thành Phong tiếp tục được bầu làm Chủ tịch UBND TP HCM',
      'Ông Nguyễn Thành Phong tiếp tục được bầu làm Chủ tịch UBND TP HCM',
    ];
    this.ImgArrTNB = ['https://nld.mediacdn.vn/zoom/216_133/291774122806476800/2021/6/24/base64-16245077392541905338107.png'];
  }

}
