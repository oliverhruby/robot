import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Subscription } from 'rxjs';
// import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Widget } from '../../widget/widget';
// import { State } from 'app/reducers';
// import { INCREMENT } from 'app/reducers/counter';

/**
 * This component shows the complete state information.
 */
@Component({
  selector: 'app-state',
  templateUrl: './state.html',
  styleUrls: ['./state.css']
})
export class StateComponent extends Widget {

  public state: any;

  constructor(private store: Store<any>) {
    super();
    this.title = 'Application State';
    store.subscribe((data) => this.state = JSON.stringify(data, undefined, 2));
  }

}
