import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Widget } from '../widget/widget';
import { Trex, AppState } from '../reducers/trex';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent extends Widget implements OnInit {

  trex: Observable<Trex>;

  constructor(
    private store: Store<AppState>
  ) {
    super();
    this.trex = store.select('trex');
  }

  ngOnInit() {
  }

}
