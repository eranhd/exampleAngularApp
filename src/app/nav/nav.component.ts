import { Component, OnInit } from '@angular/core';
import { NavService } from '../servie/nav/nav.service';
import { AuthService } from '../servie/auth/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public navService: NavService, public authService: AuthService) { }

  ngOnInit() {
  }

}
