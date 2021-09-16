import { Component, OnInit } from '@angular/core';
import { faHeart, faStar, faCommentAlt, 
  faGlobeAmericas, faSearch, faHome, faBars,
  faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faHeart= faHeart;
  faStar= faStar;
  faCommentAlt = faCommentAlt;
  faGlobeAmericas = faGlobeAmericas;
  faSearch = faSearch;
  faHome = faHome;
  faBars = faBars;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
