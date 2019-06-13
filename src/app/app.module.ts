import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { CardsService } from './services/cards.service';
import { GamesService } from './services/games.service';
import { GameViewComponent } from './components/game-view/game-view.component';
import { CardViewComponent } from './components/card-view/card-view.component';

@NgModule({
  declarations: [
    AppComponent,
    GameViewComponent,
    CardViewComponent
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
