import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Widget } from '../widget/widget';
import { Gyroscope } from "../reducers/vehicle";

/**
 * Compass indicator
 */
@Component({
  selector: 'app-compass',
  templateUrl: './compass.component.html',
  styleUrls: ['./compass.component.css']
})
export class CompassComponent extends Widget {

  heading: number;

  constructor(
    private store: Store<Gyroscope>
  ) {
    super();
    this.heading = 20;
    //this.gyroscope = store.select<Gyroscope>('gyroscope');
  }

}
