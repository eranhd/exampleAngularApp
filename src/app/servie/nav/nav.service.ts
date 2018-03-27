import { Injectable } from '@angular/core';
import { NavItem } from '../../models/navItem.model';

@Injectable()
export class NavService {

  private _navList: NavItem[] = []
  constructor() {
    this._navList = [
      new NavItem("Home", "home", "fa-home"),
      new NavItem("Gallery", "gallery", "fa-image"),
      new NavItem("About", "about", "fa-info"),
      new NavItem("Contact As", "contact-as", "fa-phone"),
      new NavItem("Profile", "profile", "fa-user")
    ]

   }

   public get navList(){
     return this._navList
   }

}



