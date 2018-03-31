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
import { RedlineComponent } from './preformers/redline/redline.component';
import { BrianCorrellComponent } from './preformers/brian-correll/brian-correll.component';
import { ScottFrancisComponent } from './preformers/scott-francis/scott-francis.component';
import { SmokeAndThunderComponent } from './preformers/smoke-and-thunder/smoke-and-thunder.component';
import { Tora3Component } from './preformers/tora3/tora3.component';
import { FighterJetIncComponent } from './preformers/fighter-jet-inc/fighter-jet-inc.component';
import { VampireAirComponent } from './preformers/vampire-air/vampire-air.component';
import { GregSheltonAirComponent } from './preformers/greg-shelton-air/greg-shelton-air.component';
import { KentPieschAirComponent } from './preformers/kent-piesch-air/kent-piesch-air.component';
import { AceMakerAirComponent } from './preformers/ace-maker-air/ace-maker-air.component';
import { DanBuchannanComponent } from './preformers/dan-buchannan/dan-buchannan.component';
import { DocComponent } from './preformers/doc/doc.component';

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
    PreformersComponent,
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
