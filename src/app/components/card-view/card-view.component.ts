import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  suitUri: string;
  @Input() suit: string;
  @Input() rank: number;
  bottonSuitView = true;

  constructor() {

  }

  ngOnInit() {
    this.suitUri = '/assets/images/' + this.suit + '.png';
  }

}
