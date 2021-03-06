import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnobModule } from 'ng2-knob';
import { NgxChartsModule } from 'ngx-charts';

import { AppComponent } from './containers/app';

import { BatteryComponent } from './components/battery/battery';
import { CameraComponent } from './components/camera/camera';
import { ChartComponent } from './components/chart/chart';
import { CompassComponent } from './components/compass/compass';
import { SceneComponent } from './components/scene/scene';
import { SpeedGaugeComponent } from './components/speed-gauge/speed-gauge';
import { StateComponent } from './components/state/state';
import { TRexStatusComponent } from './components/trex-status/trex-status';
import { TRexCommandComponent } from './components/trex-command/trex-command';

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
  TRexCommandComponent,
  SceneComponent,
  SpeedGaugeComponent,
  StateComponent,
  TRexStatusComponent
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