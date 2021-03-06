import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponetns } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InformationComponent } from './information/information.component';
import { GameComponent } from './game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardComponent } from './game/board/board.component';
import { TimerComponent } from './game/timer/timer.component';
import { GameCardComponent } from './game/board/game-card/game-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DogInfoComponent } from './information/dog-info/dog-info.component';
import { BigBoardComponent } from './scores/big-board/big-board.component';
import { MediumBoardComponent } from './scores/medium-board/medium-board.component';
import { SmallBoardComponent } from './scores/small-board/small-board.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponetns,
    HomeComponent,
    NavbarComponent,
    InformationComponent,
    GameComponent,
    BoardComponent,
    TimerComponent,
    GameCardComponent,
    DogInfoComponent,
    BigBoardComponent,
    MediumBoardComponent,
    SmallBoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
