import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  // @ts-ignore
  private http: HttpClient;


  constructor(http: HttpClient) { }

  getData(url: string, header: object = {} ): Observable<any> {
    return this.http.get(url, header);
  }
}
