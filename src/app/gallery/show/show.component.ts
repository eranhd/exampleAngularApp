import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from '../../servie/gallery/gallery.service';
import { DatabaseService } from '../../servie/database/database.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  public id: string = ""
  public image
  constructor(public dbService: DatabaseService, private acRoute: ActivatedRoute) {
    this.id = this.acRoute.snapshot.params["id"];
    this.dbService.getImageById(this.id).subscribe(res=>{
      this.image = res
    })
  }

  ngOnInit() {
  }

}
