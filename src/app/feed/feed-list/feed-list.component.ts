import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css']
})
export class FeedListComponent implements OnInit {
  @Input() header: string[] | undefined;
  @Input() data: any[] | undefined;
  // @ts-ignore
  title: string;


  constructor() { }

  ngOnInit(): void {
    this.title = 'Product List';
  }

}
