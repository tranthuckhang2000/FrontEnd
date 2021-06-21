import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()

export class Feed {
  title: string;
  url: string;
  constructor(title: string, url: string) {
    this.title = title;
    this.url = url;
  }



}
