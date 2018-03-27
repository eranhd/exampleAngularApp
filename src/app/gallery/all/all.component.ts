import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../servie/gallery/gallery.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  constructor(public galleryService: GalleryService) { }

  ngOnInit() {
  }

}
