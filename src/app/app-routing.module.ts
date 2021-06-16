import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {FooterComponent} from "./footer/footer.component";

const routes: Routes = [
  { path: 'Header-component', component: HeaderComponent },
  { path: 'Home-component', component: HomeComponent },
  { path: 'Footer-component', component: FooterComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
