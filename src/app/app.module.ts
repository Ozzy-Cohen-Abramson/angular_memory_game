import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameCardComponent } from './game-card/game-card.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  declarations: [AppComponent, GameCardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
