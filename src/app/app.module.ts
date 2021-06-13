import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PhapluatMenuComponent } from './category/phapluat-menu/phapluat-menu.component';
import { GiaitriMenuComponent } from './category/giaitri-menu/giaitri-menu.component';
import { VanngheMenuComponent } from './category/vannghe-menu/vannghe-menu.component';
import { ThethaoMenuComponent } from './category/thethao-menu/thethao-menu.component';
import { DiemdenMenuComponent } from './category/diemden-menu/diemden-menu.component';
import { CongngheMenuComponent } from './category/congnghe-menu/congnghe-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PhapluatMenuComponent,
    GiaitriMenuComponent,
    VanngheMenuComponent,
    ThethaoMenuComponent,
    DiemdenMenuComponent,
    CongngheMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
