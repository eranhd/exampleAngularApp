import { Injectable } from '@angular/core';

@Injectable()
export class GalleryService {

  private _images: { url: string, title?: string, description?: string, category?: string[] }[]
  constructor() {
    this._images = [
      { url: "https://lh3.googleusercontent.com/WTqidDuhtjqN-wYNzavuSe6inAduOwTEE_jkWPgA1AyvMiR0ySsaUwkOa_u0vCRsWdGP=h310", title: "House Design - Android Apps on Google" },
      { url : "https://www.kwentongofw.com/wp-content/uploads/2016/02/MHD-2012004-modern-house-design-perspective1-700x450.jpg", title: "Top 10 House Designs or Ideas For OFW"},
      { url: "https://2.bp.blogspot.com/-INi2ae2irYI/Vxs6av4cIRI/AAAAAAAADF0/5NlAah88EQsmxe0pDxUd0hyKtCy4EI4uwCLcB/s1600/Picture%2B106.jpg"}
    ]
  }

  public get images() {
    return this._images;
  }

  public getById(id: number){
    return this._images[id]
  }

}
