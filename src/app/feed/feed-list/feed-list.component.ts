import {Component, Input, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css']
})
export class FeedListComponent implements OnInit {
  @Input() header: string[] | undefined;
  @Input() data: any[] | undefined;
  title: string;
  navigationExtras: NavigationExtras;

  constructor(private router: Router) {

  }


  ngOnInit(): void {
    this.title = 'Product List';
  }

}
