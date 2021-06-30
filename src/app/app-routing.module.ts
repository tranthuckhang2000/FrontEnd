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


let routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ban-doc', component: BandocMenuComponent},
  {path: 'cong-doan', component:CongdoanMenuComponent},
  {path: 'giao-duc', component:GiaoducMenuComponent},
  {path: 'kinh-te', component:KinhteMenuComponent},
  {path: 'suc-khoe', component:SuckhoeMenuComponent},
  {path: 'trong-nuoc', component:TrongNuocMenuComponent},
  {path:'quoc-te', component:CategorymenuComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
