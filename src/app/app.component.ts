import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: '<app-trongnuoc_menu></app-trongnuoc_menu> <app-quocte_menu></app-quocte_menu>' +
    '<app-congdoan-menu></app-congdoan-menu> <app-bandoc-menu></app-bandoc-menu> ' +
    '<app-kinhte-menu></app-kinhte-menu> <app-suckhoe-menu></app-suckhoe-menu> <app-giaoduc-menu></app-giaoduc-menu>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd';
}
