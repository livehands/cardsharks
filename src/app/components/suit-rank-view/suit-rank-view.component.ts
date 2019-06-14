import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suit-rank-view',
  templateUrl: './suit-rank-view.component.html',
  styleUrls: ['./suit-rank-view.component.css']
})
export class SuitRankViewComponent implements OnInit {

  suitUri: string;
  @Input() suit: string;
  @Input() rank: string;
  @Input() reverse: boolean;

  constructor() { }

  ngOnInit() {
    this.suitUri = '/assets/images/' + this.suit + '.png';
  }

}
