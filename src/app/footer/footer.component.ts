import { faHeart, faStar, faCommentAlt, 
  faGlobeAmericas, faSearch, faHome, faBars,
  faTimes} from '@fortawesome/free-solid-svg-icons';import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faHome = faHome;

  constructor() { }

  ngOnInit(): void {
  }

}
