import {Observable} from 'rxjs';
import {Injectable} from "@angular/core";


@Injectable()
export class Image {
  src: any;
  alt: any;



  constructor(args: {
    src: any;
    alt: any;

  }){
    this.src = args.src;
    this.alt = args.alt;

  }
}



