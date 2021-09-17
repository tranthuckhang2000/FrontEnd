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
import {LytuongsongMenuComponent} from "./category/lytuongsong-menu/lytuongsong-menu.component";
import {NoithangMenuComponent} from "./category/noithang-menu/noithang-menu.component";
import {TindocquyenMenuComponent} from "./category/tindocquyen-menu/tindocquyen-menu.component";
import {PhunuMenuComponent} from "./category/phunu-menu/phunu-menu.component";
import {DiaocMenuComponent} from "./category/diaoc-menu/diaoc-menu.component";
import {ThitruongMenuComponent} from "./category/thitruong-menu/thitruong-menu.component";
import {FeedDetailComponent} from "./feed/feed-detail/feed-detail.component";


let routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ban-doc', component: BandocMenuComponent},
  {path: 'ban-doc/chi-tiet/:title/:link', component: FeedDetailComponent},
  {path: 'chi-tiet/:title/:link', component: FeedDetailComponent},

  {path: 'cong-doan', component:CongdoanMenuComponent},
  {path: 'cong-doan/chi-tiet/:title/:link', component: FeedDetailComponent},

  {path: 'giao-duc', component:GiaoducMenuComponent},
  {path: 'giao-duc/chi-tiet/:title/:link', component: FeedDetailComponent},

  {path: 'kinh-te', component:KinhteMenuComponent},
  {path: 'kinh-te/chi-tiet/:title/:link', component: FeedDetailComponent},

  {path: 'suc-khoe', component:SuckhoeMenuComponent},
  {path: 'suc-khoe/chi-tiet/:title/:link', component: FeedDetailComponent},

  {path: 'trong-nuoc', component:TrongNuocMenuComponent},
  {path: 'trong-nuoc/chi-tiet/:title/:link', component: FeedDetailComponent},

  {path:'quoc-te', component:CategorymenuComponent},
  {path: 'quoc-te/chi-tiet/:title/:link', component: FeedDetailComponent},

  {path:'cong-nghe' , component:CongngheMenuComponent},
  {path: 'cong-nghe/chi-tiet/:title/:link', component: FeedDetailComponent},


  {path:'phap-luat' , component:PhapluatMenuComponent},
  {path: 'phap-luat/chi-tiet/:title/:link', component: FeedDetailComponent},


  {path:'giai-tri' , component:GiaitriMenuComponent},
  {path: 'giai-tri/chi-tiet/:title/:link', component: FeedDetailComponent},


  {path:'diem-den' , component:DiemdenMenuComponent},
  {path: 'diem-den/chi-tiet/:title/:link', component: FeedDetailComponent},


  {path:'the-thao', component:ThethaoMenuComponent},
  {path: 'the-thao/chi-tiet/:title/:link', component: FeedDetailComponent},


  {path:'ly-tuong', component:LytuongsongMenuComponent},
  {path: 'ly-tuong/chi-tiet/:title/:link', component: FeedDetailComponent},


  {path:'noi-thang', component:NoithangMenuComponent},
  {path: 'noi-thang/chi-tiet/:title/:link', component: FeedDetailComponent},


  {path:'tin-doc-quyen', component:TindocquyenMenuComponent},
  {path: 'tin-doc-quyen/chi-tiet/:title/:link', component: FeedDetailComponent},


  {path:'phu-nu', component:PhunuMenuComponent},
  {path: 'phu-nu/chi-tiet/:title/:link', component: FeedDetailComponent},

  {path:'dia-oc', component:DiaocMenuComponent},
  {path: 'dia-oc/chi-tiet/:title/:link', component: FeedDetailComponent},


  {path:'thi-truong', component:ThitruongMenuComponent},
  {path: 'thi-truong/chi-tiet/:title/:link', component: FeedDetailComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
