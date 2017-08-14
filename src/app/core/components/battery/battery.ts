import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Widget } from '../../widget/widget';
import * as fromTrex from '../../reducers/trex';
import * as fromRoot from '../../../reducers';

/**
 * Visualizes current state of the battery and charging
 */
@Component({
  selector: 'app-battery',
  templateUrl: './battery.html',
  styleUrls: ['./battery.css']
})
export class BatteryComponent extends Widget {

  voltage: number = 0;

  constructor(
    private store: Store<fromRoot.State>
  ) {
    super();
    this.store.select(fromRoot.getTrexStatusState).subscribe(data => this.voltage = data.voltage);
  }

}
