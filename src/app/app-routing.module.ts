import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BandocMenuComponent} from "./category/bandoc-menu/bandoc-menu.component";
import {HomeComponent} from "./home/home.component";
import {CongdoanMenuComponent} from "./category/congdoan-menu/congdoan-menu.component";
import {GiaoducMenuComponent} from "./category/giaoduc-menu/giaoduc-menu.component";
import {KinhteMenuComponent} from "./category/kinhte-menu/kinhte-menu.component";
import {SuckhoeMenuComponent} from "./category/suckhoe-menu/suckhoe-menu.component";
import {TrongNuocMenuComponent} from "./category/trongnuoc-menu/trong-nuoc-menu.component";
import {CategorymenuComponent} from "./category/quocte-menu/categorymenu.component";
import {CongngheMenuComponent} from "./category/congnghe-menu/congnghe-menu.component";
import {PhapluatMenuComponent} from "./category/phapluat-menu/phapluat-menu.component";
import {GiaitriMenuComponent} from "./category/giaitri-menu/giaitri-menu.component";
import {DiemdenMenuComponent} from "./category/diemden-menu/diemden-menu.component";
import {ThethaoMenuComponent} from "./category/thethao-menu/thethao-menu.component";
import {VanngheMenuComponent} from "./category/vannghe-menu/vannghe-menu.component";
import {LytuongsongMenuComponent} from "./category/lytuongsong-menu/lytuongsong-menu.component";
import {NoithangMenuComponent} from "./category/noithang-menu/noithang-menu.component";
import {TindocquyenMenuComponent} from "./category/tindocquyen-menu/tindocquyen-menu.component";
import {PhunuMenuComponent} from "./category/phunu-menu/phunu-menu.component";
import {DiaocMenuComponent} from "./category/diaoc-menu/diaoc-menu.component";
import {ThitruongMenuComponent} from "./category/thitruong-menu/thitruong-menu.component";
import {FeedDetailComponent} from "./feed/feed-detail/feed-detail.component";
import {FeedListComponent} from "./feed/feed-list/feed-list.component";


let routes: Routes = [
  {path: '', component: BandocMenuComponent},
  {path: 'ban-doc/chi-tiet/:title/:link', component: FeedDetailComponent},
  {path: 'list', component: FeedListComponent},
  {path: 'ban-doc', component: BandocMenuComponent},
  {path: 'cong-doan', component:CongdoanMenuComponent},
  {path: 'giao-duc', component:GiaoducMenuComponent},
  {path: 'kinh-te', component:KinhteMenuComponent},
  {path: 'suc-khoe', component:SuckhoeMenuComponent},
  {path: 'trong-nuoc', component:TrongNuocMenuComponent},
  {path:'quoc-te', component:CategorymenuComponent},
  {path:'cong-nghe' , component:CongngheMenuComponent},
  {path:'phap-luat' , component:PhapluatMenuComponent},
  {path:'giai-tri' , component:GiaitriMenuComponent},
  {path:'diem-den' , component:DiemdenMenuComponent},
  {path:'the-thao', component:ThethaoMenuComponent},
  {path:'van-nghe' , component:VanngheMenuComponent},
  {path:'ly-tuong', component:LytuongsongMenuComponent},
  {path:'noi-thang', component:NoithangMenuComponent},
  {path:'tin-docquyen', component:TindocquyenMenuComponent},
  {path:'phu-nu', component:PhunuMenuComponent},
  {path:'dia-oc', component:DiaocMenuComponent},
  {path:'thi-truong', component:ThitruongMenuComponent},
  {path:'chi-tiet', component: FeedDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
