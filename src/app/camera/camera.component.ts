import { Component, OnInit } from '@angular/core';
import { Widget } from "../widget/widget";

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent extends Widget implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
