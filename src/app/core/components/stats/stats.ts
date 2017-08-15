import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import  * as fromRoot from '../../../reducers';
import  * as fromTrexStatus from '../../reducers/trex-status';
import { Widget } from '../../widget/widget';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.html',
  styleUrls: ['./stats.css']
})
export class StatsComponent extends Widget implements OnInit {

  status: Observable<fromTrexStatus.State>;

  constructor(
    private store: Store<fromRoot.State>
  ) {
    super();
    this.status = this.store.select(fromRoot.getTrexStatusState);
  }

  ngOnInit() {
  }

}
