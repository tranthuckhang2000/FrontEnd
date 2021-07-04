import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {FooterComponent} from "./footer/footer.component";
import {CongngheMenuComponent} from "./category/congnghe-menu/congnghe-menu.component";
import {DiemdenMenuComponent} from "./category/diemden-menu/diemden-menu.component";
import {GiaitriMenuComponent} from "./category/giaitri-menu/giaitri-menu.component";
import {PhapluatMenuComponent} from "./category/phapluat-menu/phapluat-menu.component";
import {ThethaoMenuComponent} from "./category/thethao-menu/thethao-menu.component";
import {VanngheMenuComponent} from "./category/vannghe-menu/vannghe-menu.component";

let routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'cong-nghe',component:CongngheMenuComponent},
  {path:'diem-den', component:DiemdenMenuComponent},
  {path:'giai-tri', component:GiaitriMenuComponent},
  {path:'phap-luat', component:PhapluatMenuComponent},
  {path:'the-thao', component:ThethaoMenuComponent},
  {path:'van-nghe', component:VanngheMenuComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
