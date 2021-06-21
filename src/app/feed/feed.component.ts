import {Component, Input, OnInit} from '@angular/core';
import {Data} from "./model/data";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  title = 'FrontEnd';
  header: string[] | undefined;
  data: any[];


  constructor(private httpData: Data) {
    this.data = [];
    httpData.getData('http://localhost:4200/assets/data.json')
      .subscribe(value => {
        for (const [k, v] of Object.entries(value)) {
          this.data.push(v);
          console.log(k);
        }
      });

  }

  ngOnInit(): void {
    this.header = ['OrderDate', 'Region', 'Rep', 'Item', 'Units', 'UnitCost', 'Total'];
  }
}
