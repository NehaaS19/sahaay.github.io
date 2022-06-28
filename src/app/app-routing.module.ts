import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComedyComponent } from './comedy/comedy.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { YoutubeComponent } from './youtube/youtube.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'youtube',component:YoutubeComponent},
  {path:'games',component:GamesComponent},
  {path:'comedy',component:ComedyComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,YoutubeComponent,GamesComponent,ComedyComponent]