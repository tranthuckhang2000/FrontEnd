import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()

export class Feed {
  constructor(private http: HttpClient) {
  }


  getData(url: string, header: object ={}) : Observable<any> {
    return this.http.get(url, header);

  }
}
