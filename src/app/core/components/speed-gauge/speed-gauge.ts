import { Component, OnInit } from '@angular/core';
import { Widget } from "../../widget/widget";

@Component({
  selector: 'app-speed-gauge',
  templateUrl: './speed-gauge.html',
  styleUrls: ['./speed-gauge.css']
})
export class SpeedGaugeComponent extends Widget implements OnInit {

  view: any[] = [300, 300];
  data: any = [
    {
      "name": "Battery",
      "value": 30
    }
  ];
  colorScheme = {
    domain: ['lime']
  };

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
