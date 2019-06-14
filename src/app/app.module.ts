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

@NgModule({
  declarations: [
    AppComponent,
    GameViewComponent,
    CardViewComponent,
    SuitRankViewComponent,
    ScoreViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CardsService,
    GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
