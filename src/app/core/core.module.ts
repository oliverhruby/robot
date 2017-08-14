import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnobModule } from 'ng2-knob';
import { NgxChartsModule } from 'ngx-charts';

import { AppComponent } from './containers/app';

import { BatteryComponent } from './components/battery/battery';
import { CameraComponent } from './components/camera/camera';
import { ChartComponent } from './components/chart/chart';
import { CompassComponent } from './components/compass/compass';
import { JoystickComponent } from './components/joystick/joystick';
import { SceneComponent } from './components/scene/scene';
import { SpeedGaugeComponent } from './components/speed-gauge/speed-gauge';
import { StatsComponent } from './components/stats/stats';
import { StateComponent } from './components/state/state';

// import { GyroscopeService } from './services/gyroscope';
import { GamepadService } from './services/gamepad.service';
import { SpeechSynthesisService } from './services/speech-synthesis.service';
import { TRexService } from './services/trex.service';
import { WebSocketService } from './services/websocket.service';

export const COMPONENTS = [
  AppComponent,
  BatteryComponent,
  CameraComponent,
  ChartComponent,
  CompassComponent,
  JoystickComponent,
  SceneComponent,
  SpeedGaugeComponent,
  StateComponent,
  StatsComponent
];

@NgModule({
  imports: [
    CommonModule,
    KnobModule,
    NgxChartsModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [
        SpeechSynthesisService,
        TRexService,
        WebSocketService
      ],
    };
  }
}