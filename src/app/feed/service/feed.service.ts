import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {FeedItems} from "../model/feed-items";
import {Image} from "../model/image";

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) {
  }

  getData() {
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
      let feedItems = new FeedItems({title, pubDate, link, guid, thumbnail, description, content});
      // console.log('List From FeedService')
      // console.log(feedItems.link);
      list.push(feedItems);
    }
    ;
  }

  onSendService(formData: FormData):Observable<any>{
    return this.http.post<any>('http://localhost/APICrawlData/crawl.php', formData);
  }

  onSendRss(formData: FormData):Observable<any>{
    return this.http.post<any>('http://localhost/APICrawlData/test.php', formData);
  }

  formatData(title: string, content: any[], image: any[], value: any){
    for (var i = 0; i <= value.content.length - 1; i++){
      content.push(value.content[i]);
      console.log(content[i]);
    }
    for (var i = 0; i <= value.imageSrc.length - 1; i++){
      let src = value.imageSrc[i];
      let alt = value.imageAlt[i];
      let item = new Image({src, alt});
      image.push(item);
    }
  }
  getContent(content: string[], value: any) {
    for (var i = 0; i <= value.content.length - 1; i++){
      content.push(value.content[i]);

    }

  }

}
