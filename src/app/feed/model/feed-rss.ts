import {Observable} from 'rxjs';
import {Injectable} from "@angular/core";


@Injectable()
export class FeedRss {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;

  constructor(args: {
    title: string;
    pubDate: string;
    link: string;
    thumbnail: string;
  }){
    this.title = args.title;
    this.pubDate = args.pubDate;
    this.link = args.link;
    this.thumbnail = args.thumbnail;
  }
}



