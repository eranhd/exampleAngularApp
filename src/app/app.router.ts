import { Routes } from "@angular/router"
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { AboutComponent } from "./about/about.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ContactAsComponent } from "./contact-as/contact-as.component";
import { AllComponent } from "./gallery/all/all.component";
import { ShowComponent } from "./gallery/show/show.component";

export const appRoutes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "profile", component: ProfileComponent },
    { path: "about", component: AboutComponent },
    {
        path: "gallery", component: GalleryComponent, children:
            [
                { path: '', component: AllComponent },
                { path: 'show/:id', component: ShowComponent },                
            ]
    },
    { path: "contact-as", component: ContactAsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];