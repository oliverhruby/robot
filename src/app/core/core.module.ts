import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from 'ngx-charts';

import { AppComponent } from './containers/app';

import { CameraComponent } from './components/camera/camera';
import { ChartComponent } from './components/chart/chart';
import { CompassComponent } from './components/compass/compass';
import { JoystickComponent } from './components/joystick/joystick';
import { SpeedGaugeComponent } from './components/speed-gauge/speed-gauge';
import { StatsComponent } from './components/stats/stats';
import { StateComponent } from './components/state/state';

// import { GyroscopeService } from './services/gyroscope';
import { SpeechSynthesisService } from './services/speech-synthesis';
import { TRexService } from './services/trex';
import { WebSocketService } from './services/websocket';

export const COMPONENTS = [
  AppComponent,
  CameraComponent,
  ChartComponent,
  CompassComponent,
  JoystickComponent,
  SpeedGaugeComponent,
  StateComponent,
  StatsComponent
];

@NgModule({
  imports: [
    CommonModule,
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