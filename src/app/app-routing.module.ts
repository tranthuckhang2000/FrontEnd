import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BandocMenuComponent} from "./category/bandoc-menu/bandoc-menu.component";
import {HomeComponent} from "./home/home.component";

let routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ban-doc', component: BandocMenuComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
