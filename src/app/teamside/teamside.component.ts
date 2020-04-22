import { Component, OnInit } from '@angular/core';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-teamside',
  templateUrl: './teamside.component.html',
  styleUrls: ['./teamside.component.css']
})
export class TeamsideComponent implements OnInit {
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faLinkedinIn = faLinkedinIn;
  faInstagram = faInstagram;
  constructor() { }

  ngOnInit(): void {
  }

}
