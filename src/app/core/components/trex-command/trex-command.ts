import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { TRexService } from '../../services/trex.service';
import { Widget } from '../../widget/widget';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import * as joystick from '../../actions/joystick';
import * as joystickReducers from '../../reducers/joystick';
import * as trex from '../../actions/trex';

@Component({
  selector: 'app-trex-command',
  templateUrl: './trex-command.html',
  styleUrls: ['./trex-command.css']
})
export class TRexCommandComponent extends Widget implements OnInit {
  pressed: boolean = false;
  state: Observable<joystickReducers.State>;

  constructor(
    private store: Store<fromRoot.State>,
    private tRexService: TRexService
  ) {
    super();
    this.title = 'TRex Commands';
    let me = this;
    this.state = this.store.select<joystickReducers.State>(fromRoot.getJoystickState);
  }

  forward() {
    this.store.dispatch(new trex.UpdateMotors({ lmSpeed: 30, rmSpeed: 30}));
    // TODO: move this to an effect
    this.tRexService.motors(30, 30);
  }

  left() {
    this.store.dispatch(new trex.UpdateMotors({ lmSpeed: 30, rmSpeed: 0}));
    // TODO: move this to an effect
    this.tRexService.motors(30, 0);
  }

  right() {
    this.store.dispatch(new trex.UpdateMotors({ lmSpeed: 0, rmSpeed: 30}));
    // TODO: move this to an effect
    this.tRexService.motors(0, 30);
  }

  stop() {
    this.store.dispatch(new trex.UpdateMotors({ lmSpeed: 0, rmSpeed: 0}));
    // TODO: move this to an effect
    this.tRexService.motors(0, 0);
  }

  photo() {
    this.tRexService.photo();
  }

  talk() {
    this.tRexService.talk('hello');
  }

  status() {
    this.tRexService.status();
  }

  servo(index, value) {
    this.store.dispatch(new trex.UpdateServos(JSON.parse("{\"servo" + index + "\":" + value + "}")));
  }

  @ViewChild('joy')
  joy: ElementRef;

  ngOnInit() {
    const joy = this.joy.nativeElement;
    const mouseDown$ = Observable.fromEvent<MouseEvent>(joy, 'mousedown');
    const mouseMove$ = Observable.fromEvent<MouseEvent>(joy, 'mousemove');
    const mouseUp$ = Observable.fromEvent<MouseEvent>(joy, 'mouseup');

    mouseDown$.subscribe(data => this.store.dispatch(
      new joystick.Update({ x: data.offsetX / 100 - 1, y: 1 - data.offsetY / 100 })
    ));

    // mouseMove$.subscribe(data => this.store.dispatch(
    //   new fromJoystick.Update({ x: data.offsetX / 100 - 1, y: 1 - data.offsetY / 100 })
    // ));

    mouseUp$.subscribe(data => this.store.dispatch(
      new joystick.Update({ x: 0, y: 0 })
    ));
  }
}
