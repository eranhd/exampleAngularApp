import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from '../../servie/gallery/gallery.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  public id: number = 0 
  public image
  constructor(public galleryService: GalleryService, private acRoute: ActivatedRoute) {
    this.id = +this.acRoute.snapshot.params["id"];
    this.image = this.galleryService.getById(this.id)
   }

  ngOnInit() {
  }

}
