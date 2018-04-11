import { Component, OnInit } from '@angular/core';
import { NavService } from '../servie/nav/nav.service';
import { AuthService } from '../servie/auth/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  email
  pass
  constructor(public navService: NavService, public authService: AuthService) { }


  async login(){
    await this.authService.loginWithEmailAndPassword(this.email, this.pass)
  }

  async signUp(){
    await this.authService.signupWithEmailAndPass(this.email, this.pass)
  }
  ngOnInit() {
  }

}
