import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {FeedItems} from "../model/feed-items";

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) {
  }

  getData() {
    console.log(1234576);
  }

  getDataRss(url: string, data: object = {}): Observable<any> {
    return this.http.get(url, data);
  }

  createListFeedItems(list: FeedItems[], value: any) {
    for (var i = 0; i <= value.items.length - 1; i++) {
      var title = value.items[i].title;
      var pubDate = value.items[i].pubDate;
      var link = value.items[i].link;
      var guid = value.items[i].guid;
      var thumbnail = value.items[i].thumbnail;
      var description = value.items[i].description;
      var content = value.items[i].content;
      console.log('test data');
      let feedItems = new FeedItems({title, pubDate, link, guid, thumbnail, description, content});
      list.push(feedItems);
    }
    ;
  }
}
