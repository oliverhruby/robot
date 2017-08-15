import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import  * as fromRoot from '../../../reducers';
import  * as fromTrexStatus from '../../reducers/trex-status';
import { Widget } from '../../widget/widget';

@Component({
  selector: 'app-trex-status',
  templateUrl: './trex-status.html',
  styleUrls: ['./trex-status.css']
})
export class TRexStatusComponent extends Widget implements OnInit {

  status: Observable<fromTrexStatus.State>;

  constructor(
    private store: Store<fromRoot.State>
  ) {
    super();
    this.title = "TRex Status";
    this.status = this.store.select(fromRoot.getTrexStatusState);
  }

  ngOnInit() {
  }

}
