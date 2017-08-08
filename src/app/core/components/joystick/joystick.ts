import { Component, OnInit } from '@angular/core';
import { TRexService } from '../../services/trex';
import { Widget } from '../../widget/widget';

@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.html',
  styleUrls: ['./joystick.css']
})
export class JoystickComponent extends Widget implements OnInit {

  constructor(
    private tRexService: TRexService
  ) {
    super();
  }

  ngOnInit() {}

  forward() {
    this.tRexService.motors(30,30);
  }

  left() {
    this.tRexService.motors(30,0);
  }

  right() {
    this.tRexService.motors(0,30);
  }

  stop() {
    this.tRexService.motors(0,0);
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

}
