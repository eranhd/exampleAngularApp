import { Component, OnInit, OnDestroy } from '@angular/core';
import { GalleryService } from '../../servie/gallery/gallery.service';
import { DatabaseService } from '../../servie/database/database.service';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit, OnDestroy {

  public images
  private imageSub
  constructor(public galleryService: GalleryService, public dbService: DatabaseService) { }

  ngOnInit() {
    this.imageSub = this.dbService.getImages().subscribe(res => {
      // console.log(res[0].payload.doc.data());
      this.images = res.map(a => {
        const data = a.payload.doc.data() as Image;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    })
  }

  ngOnDestroy(){
    this.imageSub.unsubscribe();
  }

}
