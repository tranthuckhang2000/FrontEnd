import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// import { CategorymenuComponent } from './category/quocte-menu/categorymenu.component';
import { FeedComponent } from './feed/feed.component';
import {Data} from "./feed/model/data";
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
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
    // CategorymenuComponent,
    FeedComponent,
    HomeComponent,
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
