import { Component, OnInit } from '@angular/core';
import { TRexService } from "../services/trex.service";
import { Widget } from "../widget/widget";

@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.component.html',
  styleUrls: ['./joystick.component.css']
})
export class JoystickComponent extends Widget implements OnInit {

  constructor(
    private tRexService: TRexService
  ) {
    super();
  }

  ngOnInit() {}

  forward() {
    this.tRexService.forward();
  }

  left() {
    this.tRexService.left();
  }

  right() {
    this.tRexService.right();
  }

  stop() {
    this.tRexService.stop();
  }

  photo() {
    this.tRexService.photo();
  }

}
