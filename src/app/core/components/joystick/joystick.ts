import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { TRexService } from '../../services/trex';
import { Widget } from '../../widget/widget';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import * as fromJoystick from '../../reducers/joystick';

@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.html',
  styleUrls: ['./joystick.css']
})
export class JoystickComponent extends Widget implements OnInit {
  pressed: boolean = false;
  state: Observable<fromJoystick.State>;

  constructor(
    private store: Store<fromRoot.State>,
    private tRexService: TRexService
  ) {
    super();
    let me = this;
    this.state = this.store.select<fromJoystick.State>(fromRoot.getJoystickState);
  }

  forward() {
    this.tRexService.motors(30, 30);
  }

  left() {
    this.tRexService.motors(30, 0);
  }

  right() {
    this.tRexService.motors(0, 30);
  }

  stop() {
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

  @ViewChild('joy')
  joy: ElementRef;

  ngOnInit() {
    const joy = this.joy.nativeElement;
    const mouseDown$ = Observable.fromEvent<MouseEvent>(joy, 'mousedown');
    const mouseMove$ = Observable.fromEvent<MouseEvent>(joy, 'mousemove');
    const mouseUp$ = Observable.fromEvent<MouseEvent>(joy, 'mouseup');

    mouseDown$.subscribe(data => this.store.dispatch(
      new fromJoystick.Update({ x: data.offsetX / 100 - 1, y: 1 - data.offsetY / 100 })
    ));

    mouseMove$.subscribe(data => this.store.dispatch(
      new fromJoystick.Update({ x: data.offsetX / 100 - 1, y: 1 - data.offsetY / 100 })
    ));
  }
}
