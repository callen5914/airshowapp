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
<<<<<<< HEAD
import { TimelineComponent } from './home/timeline/timeline.component';
=======
import { GuestinfoComponent } from './home/guestinfo/guestinfo.component';
>>>>>>> guestInfo

import { FaqComponent } from './faq/faq.component';

import { performersComponent } from './performers/performers.component';
import { RedlineComponent } from './performers/redline/redline.component';
import { BrianCorrellComponent } from './performers/brian-correll/brian-correll.component';
import { ScottFrancisComponent } from './performers/scott-francis/scott-francis.component';
import { SmokeAndThunderComponent } from './performers/smoke-and-thunder/smoke-and-thunder.component';
import { Tora3Component } from './performers/tora3/tora3.component';
import { FighterJetIncComponent } from './performers/fighter-jet-inc/fighter-jet-inc.component';
import { VampireAirComponent } from './performers/vampire-air/vampire-air.component';
import { GregSheltonAirComponent } from './performers/greg-shelton-air/greg-shelton-air.component';
import { KentPieschAirComponent } from './performers/kent-piesch-air/kent-piesch-air.component';
import { AceMakerAirComponent } from './performers/ace-maker-air/ace-maker-air.component';
import { DanBuchannanComponent } from './performers/dan-buchannan/dan-buchannan.component';
import { DocComponent } from './performers/doc/doc.component';
import { C17demoComponent } from './performers/c17demo/c17demo.component';
import { B1FlybyComponent } from './performers/b1-flyby/b1-flyby.component';
import { GoldenknightsComponent } from './performers/goldenknights/goldenknights.component';

import { GalleryComponent } from './gallery/gallery.component';

import { SponsorsComponent } from './sponsors/sponsors.component';

import { ConnectComponent } from './connect/connect.component';
import { FormComponent } from './connect/form/form.component';





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
    performersComponent,
    GalleryComponent,
    SponsorsComponent,
    ConnectComponent,
    FormComponent,

    RedlineComponent,
    BrianCorrellComponent,
    ScottFrancisComponent,
    SmokeAndThunderComponent,
    Tora3Component,
    FighterJetIncComponent,
    VampireAirComponent,
    GregSheltonAirComponent,
    KentPieschAirComponent,
    AceMakerAirComponent,
    DanBuchannanComponent,
    DocComponent,
    C17demoComponent,
    B1FlybyComponent,
    GoldenknightsComponent,
<<<<<<< HEAD
    TimelineComponent,
=======
    GuestinfoComponent,
>>>>>>> guestInfo
    
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
