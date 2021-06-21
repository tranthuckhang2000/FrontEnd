import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CategorymenuComponent } from './category/quocte-menu/categorymenu.component';
import { TrongNuocMenuComponent } from './category/trongnuoc-menu/trong-nuoc-menu.component';
import { CongdoanMenuComponent } from './category/congdoan-menu/congdoan-menu.component';
import { BandocMenuComponent } from './category/bandoc-menu/bandoc-menu.component';
import { KinhteMenuComponent } from './category/kinhte-menu/kinhte-menu.component';
import { SuckhoeMenuComponent } from './category/suckhoe-menu/suckhoe-menu.component';
import { GiaoducMenuComponent } from './category/giaoduc-menu/giaoduc-menu.component';
import { FeedComponent } from './feed/feed.component';
import {Data} from "./feed/model/data";
import {HttpClientModule} from "@angular/common/http";
import { FeedListComponent } from './feed/feed-list/feed-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CategorymenuComponent,
    TrongNuocMenuComponent,
    CongdoanMenuComponent,
    BandocMenuComponent,
    KinhteMenuComponent,
    SuckhoeMenuComponent,
    GiaoducMenuComponent,
    FeedComponent,
    FeedListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Data],
  exports: [HttpClientModule],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
