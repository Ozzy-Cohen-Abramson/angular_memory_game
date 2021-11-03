import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { ScoresComponent } from './scores/scores.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'scores', component: ScoresComponent },
  { path: 'breed', component: InformationComponent },
  { path: 'breed/:breed', component: InformationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponetns = [
  HomeComponent,
  InformationComponent,
  ScoresComponent,
];
