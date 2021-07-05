import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
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
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { CongngheMenuComponent } from './category/congnghe-menu/congnghe-menu.component';
import { DiemdenMenuComponent } from './category/diemden-menu/diemden-menu.component';
import { GiaitriMenuComponent } from './category/giaitri-menu/giaitri-menu.component';
import { PhapluatMenuComponent } from './category/phapluat-menu/phapluat-menu.component';
import { ThethaoMenuComponent } from './category/thethao-menu/thethao-menu.component';
import { VanngheMenuComponent } from './category/vannghe-menu/vannghe-menu.component';
import { LytuongsongMenuComponent } from './category/lytuongsong-menu/lytuongsong-menu.component';
import { NoithangMenuComponent } from './category/noithang-menu/noithang-menu.component';
import { TindocquyenMenuComponent } from './category/tindocquyen-menu/tindocquyen-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    CategorymenuComponent,
    TrongNuocMenuComponent,
    CongdoanMenuComponent,
    BandocMenuComponent,
    KinhteMenuComponent,
    SuckhoeMenuComponent,
    GiaoducMenuComponent,
    FeedComponent,
    FeedListComponent,
    HomeComponent,
    CongngheMenuComponent,
    DiemdenMenuComponent,
    GiaitriMenuComponent,
    PhapluatMenuComponent,
    ThethaoMenuComponent,
    VanngheMenuComponent,
    LytuongsongMenuComponent,
    NoithangMenuComponent,
    TindocquyenMenuComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule
    ],
  providers: [Data],
  exports: [HttpClientModule],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
