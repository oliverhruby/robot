import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Widget } from '../../widget/widget';
import * as fromRoot from '../../../reducers';

/**
 * Compass indicator
 */
@Component({
  selector: 'app-compass',
  templateUrl: './compass.html',
  styleUrls: ['./compass.css']
})
export class CompassComponent extends Widget {

  heading: number;

  constructor(
    private store: Store<fromRoot.State>
  ) {
    super();
    this.store.select(fromRoot.getGyroscopeState).subscribe(data => this.heading = data.x);
  }

}
