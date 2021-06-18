import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {throwError} from "rxjs";
import {Feed} from "../model/feed";
import {FeedItems} from "../model/feed-items";
// @ts-ignore
import Parser from 'rss-parser';


@Injectable({
  providedIn: 'root'
})
export class FeedService {
  constructor(private http: HttpClient) { }

  private cors: string = `https://cors.bridged.cc/`;
  feed: Feed[] = [];
  feedItemList: FeedItems[] = [];

  getDataRss(url: string){

  }
  handlerError(error: Response | any) {
    let errorMsg: string = "";
    if (error instanceof Response) {
      const err = error || '';
      errorMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errorMsg = error.message ? error.message : error.toString();
    }
    console.log(errorMsg);
    window.alert(errorMsg);
    return throwError(errorMsg);
  }

  extractFeedList(xml: any){
    let parser = new Parser();
    const ZoneAwarePromise: any = parser.parseString(xml);
    const FeedItemLists = ZoneAwarePromise.items;

    const itemsArray: any[] = [];
    if(FeedItemLists.length){
      FeedItemLists.forEach((feedItem: any) =>{
        let content = feedItem['content:encoded'] || feedItem.content;

        let htmlParser = new DOMParser();
        let htmlDoc = htmlParser.parseFromString(content, "text/html");

        let expiryDate = new Date(new Date().getTime() + (30 * 24 * 60 * 60 * 1000));

        let thumbnail ="";
        let img = htmlDoc.getElementsByTagName('img');
        if(img.length){
          thumbnail = img[0].src;
        }

        let obj = new FeedItems({
          "title": feedItem.title,
            "link": feedItem.link,
            "author": feedItem['dc:creator'] || feedItem.author,
            "categories": feedItem.categories,
            "pubDate": feedItem.pubDate,
            "content": content,
            "expiryDate": expiryDate,
            "thumbnail": thumbnail
        });
        itemsArray.push(obj);
      });
    } else {
      return null;
    }
    return itemsArray;
  }
}
