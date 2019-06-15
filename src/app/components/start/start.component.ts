import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { Player } from '@angular/core/src/render3/interfaces/player';
import { PlayerModel } from 'src/app/models/player.model';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  playerForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.playerForm = this.fb.group({
      playerName: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  startGame() {
    const name = this.playerForm.value.playerName;
    const p = new PlayerModel(name, 0);
    localStorage.setItem('player', JSON.stringify(p));
    this.router.navigate(['/game']);
  }
}
