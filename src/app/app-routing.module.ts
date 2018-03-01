import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { PreformersComponent} from './preformers/preformers.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ConnectComponent } from './connect/connect.component';
 
// This is my case
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path:'performers',
        component:PreformersComponent
    },
    {
        path: 'faq',
        component: FaqComponent
    },
    {
        path: 'gallery',
        component: GalleryComponent
    },
    {
        path: 'sponsors',
        component: SponsorsComponent
    },
    {
        path: 'connect',
        component: ConnectComponent
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
