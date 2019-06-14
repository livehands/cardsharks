import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameViewComponent } from './components/game-view/game-view.component';
import { ScoreViewComponent } from './components/score-view/score-view.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'start' },
  { path: 'game', component: GameViewComponent },
  { path: 'scores', component: ScoreViewComponent },
  { path: 'start', component: StartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
