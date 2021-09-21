import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {FeedDetailComponent} from "./feed/feed-detail/feed-detail.component";
import {CategoryDetailComponent} from "./category/category-detail/category-detail.component";
import {SearchDetailComponent} from "./search-detail/search-detail.component";

let routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'danh-muc/:category', component: CategoryDetailComponent},
  {path: 'chi-tiet/:title/:link', component: FeedDetailComponent},
  {path: 'tim-kiem/:title', component: SearchDetailComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
