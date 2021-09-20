import {Observable} from 'rxjs';
import {Injectable} from "@angular/core";


@Injectable()
export class FeedRss {
  category: string;
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;

  constructor(args: {
    category: string,
    title: string;
    pubDate: string;
    link: string;
    thumbnail: string;
  }){
    this.category = args.category,
    this.title = args.title;
    this.pubDate = args.pubDate;
    this.link = args.link;
    this.thumbnail = args.thumbnail;
  }
}



