import {Observable} from 'rxjs';
import {Injectable} from "@angular/core";


@Injectable()
export class FeedItems {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: string[];
  categories: string[];


  constructor(args: {
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    author: string;
    thumbnail: string;
    description: string;
    content: string;
    enclosure: string[];
    categories: string[];
  }){
    this.title = args.title;
    this.pubDate = args.pubDate;
    this.link = args.link;
    this.guid = args.guid;
    this.author = args.author;
    this.thumbnail = args.thumbnail;
    this.description = args.description;
    this.content = args.content;
    this.enclosure = args.enclosure;
    this.categories = args.categories;
  }
}



