import { Component, OnInit } from '@angular/core';
import { Widget } from '../../widget/widget';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.html',
  styleUrls: ['./camera.css']
})
export class CameraComponent extends Widget implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
