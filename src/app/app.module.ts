import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router"

import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { NavService } from './servie/nav/nav.service';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactAsComponent } from './contact-as/contact-as.component';
import { ProfileComponent } from './profile/profile.component';
import { appRoutes } from './app.router';
import { CarComponent } from './gallery/car/car.component';
import { LandscapeComponent } from './gallery/landscape/landscape.component';
import { SmartphoneComponent } from './gallery/smartphone/smartphone.component';
import { AllComponent } from './gallery/all/all.component';
import { ShowComponent } from './gallery/show/show.component';
import { GalleryService } from './servie/gallery/gallery.service';


@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    NavItemComponent,
    NavComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    ContactAsComponent,
    ProfileComponent,
    CarComponent,
    LandscapeComponent,
    SmartphoneComponent,
    AllComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    NavService,
    GalleryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
