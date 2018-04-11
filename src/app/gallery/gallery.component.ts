import { Component, OnInit, OnDestroy } from '@angular/core';
import { Image } from '../models/image.model';
import { DatabaseService } from '../servie/database/database.service';
import { AuthService } from '../servie/auth/auth.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {

  public image: Image = new Image();
  public category: string = "";
  constructor(public dbService: DatabaseService, public authService: AuthService) { }

  ngOnInit() {
  }

  add() {
    this.image.category = this.category.split(",");
    this.dbService.addImage(this.image);
    this.image = new Image();
    this.category = "";
  }

  ngOnDestroy(){
    console.log("destroy gallery")
  }

}
