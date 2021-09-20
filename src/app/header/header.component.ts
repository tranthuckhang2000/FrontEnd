import {Component, Input, OnInit} from '@angular/core';
import {
  faHeart,
  faStar,
  faCommentAlt,
  faGlobeAmericas,
  faSearch,
  faHome,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() rssFeed: any[] = [];
  faHeart = faHeart;
  faStar = faStar;
  faCommentAlt = faCommentAlt;
  faGlobeAmericas = faGlobeAmericas;
  faSearch = faSearch;
  faHome = faHome;
  faBars = faBars;
  faTimes = faTimes;
  categoryTop: any[] = [];
  categoryMid: any[] = [];
  public titleSearch = "";

  constructor() {}

  movePage(){
    this.titleSearch = "";
  }

  ngOnInit(): void {
    this.categoryMid = [
      {category: "Tin mới nhất", link: "https://nld.com.vn/tin-moi-nhat.rss"},
      {category: "Thời sự", link: "https://nld.com.vn/thoi-su.rss"},
      {category: "Quốc tế", link: "https://nld.com.vn/thoi-su-quoc-te.rss"},
      {category: "Công đoàn", link: "https://nld.com.vn/cong-doan.rss"},
      {category: "Địa ốc", link: "https://nld.com.vn/dia-oc.rss"},
      {category: "Bạn đọc", link: "https://nld.com.vn/ban-doc.rss"},
      {category: "Kinh tế", link: "https://nld.com.vn/kinh-te.rss"},
      {category: "Sức khoẻ", link: "https://nld.com.vn/suc-khoe.rss"},
      {category: "Giáo dục", link: "https://nld.com.vn/giao-duc.rss"},
      {category: "Pháp luật", link: "https://nld.com.vn/phap-luat.rss"},
      {category: "Giải trí", link: "https://nld.com.vn/gia-tri.rss"},
      {category: "Thể thao", link: "https://nld.com.vn/the-thao.rss"},
      {category: "Công nghệ", link: "https://nld.com.vn/cong-nghe.rss"},
      {category: "Điểm đến", link: "https://nld.com.vn/diem-den.rss"},

    ];
    this.categoryTop = [
      {category: "Lý tưởng sống", link: "https://nld.com.vn/ly-tuong-song.rss"},
      {category: "Nói thẳng", link: "https://nld.com.vn/noi-thang.rss"},
      {category: "Tin độc quyền", link: "https://nld.com.vn/tin-doc-quyen.rss"},
      {category: "Thị trường", link: "https://nld.com.vn/thi-truong.rss"},
    ];
  }
}
