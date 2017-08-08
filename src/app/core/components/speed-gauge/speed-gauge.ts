import { Component, OnInit } from '@angular/core';
import { Widget } from "../../widget/widget";

@Component({
  selector: 'app-speed-gauge',
  templateUrl: './speed-gauge.html',
  styleUrls: ['./speed-gauge.css']
})
export class SpeedGaugeComponent extends Widget implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
