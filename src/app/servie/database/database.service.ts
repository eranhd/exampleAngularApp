import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Image } from '../../models/image.model';

@Injectable()
export class DatabaseService {

  private imageCollections: AngularFirestoreCollection<any>;
  constructor(private afs: AngularFirestore) {
     this.imageCollections = afs.collection<any>('images');
  }

  public addImage(image: Image){
    this.imageCollections.add(Image.toObject(image))
  }

  public getImages(){
    this.imageCollections.valueChanges().subscribe(res => {
      console.log(res)
    })
    return this.imageCollections.snapshotChanges()
    
  }

  public getImageById(id: string) {
    return this.afs.doc<any>('images/' + id).valueChanges()
    /*this.imageCollections = afs.doc<סוג האובייקט>(‘שם האוסף/שם המסמך’);*/
  }
  

}

