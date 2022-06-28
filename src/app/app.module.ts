import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { YoutubeComponent } from './youtube/youtube.component';
import { GamesComponent } from './games/games.component';
import { ComedyComponent } from './comedy/comedy.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    YoutubeComponent,
    GamesComponent,
    ComedyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
