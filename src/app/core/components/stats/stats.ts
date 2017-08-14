import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import  * as fromRoot from '../../../reducers';
import { Widget } from '../../widget/widget';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.html',
  styleUrls: ['./stats.css']
})
export class StatsComponent extends Widget implements OnInit {

  trex: Observable<any>; //TODO: typed!

  constructor(
    private store: Store<fromRoot.State>
  ) {
    super();
    this.trex = this.store.select(fromRoot.getTrexStatusState);
  }

  ngOnInit() {
  }

}
