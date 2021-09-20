import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
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
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { CongngheMenuComponent } from './category/congnghe-menu/congnghe-menu.component';
import { DiemdenMenuComponent } from './category/diemden-menu/diemden-menu.component';
import { GiaitriMenuComponent } from './category/giaitri-menu/giaitri-menu.component';
import { PhapluatMenuComponent } from './category/phapluat-menu/phapluat-menu.component';
import { ThethaoMenuComponent } from './category/thethao-menu/thethao-menu.component';
import { LytuongsongMenuComponent } from './category/lytuongsong-menu/lytuongsong-menu.component';
import { NoithangMenuComponent } from './category/noithang-menu/noithang-menu.component';
import { TindocquyenMenuComponent } from './category/tindocquyen-menu/tindocquyen-menu.component';
import { PhunuMenuComponent } from './category/phunu-menu/phunu-menu.component';
import { ThitruongMenuComponent } from './category/thitruong-menu/thitruong-menu.component';
import { DiaocMenuComponent } from './category/diaoc-menu/diaoc-menu.component';
import { FeedDetailComponent } from './feed/feed-detail/feed-detail.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
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
    HomeComponent,
    CongngheMenuComponent,
    DiemdenMenuComponent,
    GiaitriMenuComponent,
    PhapluatMenuComponent,
    ThethaoMenuComponent,
    LytuongsongMenuComponent,
    NoithangMenuComponent,
    TindocquyenMenuComponent,
    PhunuMenuComponent,
    ThitruongMenuComponent,
    DiaocMenuComponent,
    FeedDetailComponent,
    CategoryDetailComponent,
    SearchDetailComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        FontAwesomeModule,
        FormsModule

    ],
  providers: [Data],
  exports: [HttpClientModule],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
