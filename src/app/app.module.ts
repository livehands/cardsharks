import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { CardsService } from './services/cards.service';
import { GamesService } from './services/games.service';
import { GameViewComponent } from './components/game-view/game-view.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { SuitRankViewComponent } from './components/suit-rank-view/suit-rank-view.component';
import { ScoreViewComponent } from './components/score-view/score-view.component';
import { StartComponent } from './components/start/start.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GameViewComponent,
    CardViewComponent,
    SuitRankViewComponent,
    ScoreViewComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CardsService,
    GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
