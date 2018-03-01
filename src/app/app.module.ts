import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { ClarityModule } from '@clr/angular';
//Global Imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
//Page&Child
import { HomeComponent } from './home/home.component';
import { JumbotronComponent } from './home/jumbotron/jumbotron.component';
import { CardboxComponent } from './home/cardbox/cardbox.component';
import { BlogComponent } from './home/blog/blog.component';

import { FaqComponent } from './faq/faq.component';

import { PreformersComponent } from './preformers/preformers.component';

import { GalleryComponent } from './gallery/gallery.component';

import { SponsorsComponent } from './sponsors/sponsors.component';

import { ConnectComponent } from './connect/connect.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    CardboxComponent,
    BlogComponent,
    HomeComponent,
    FooterComponent,
    FaqComponent,
    PreformersComponent,
    GalleryComponent,
    SponsorsComponent,
    ConnectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
