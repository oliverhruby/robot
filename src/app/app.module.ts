// modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from 'ngx-charts';
import { StoreModule } from '@ngrx/store';
// components
import { AppComponent } from './app.component';
import { CameraComponent } from './camera/camera.component';
import { CompassComponent } from './compass/compass.component';
import { JoystickComponent } from './joystick/joystick.component';
import { StatsComponent } from './stats/stats.component';
// reducers
import { trexReducer } from './reducers/trex';
// services
import { SpeechSynthesisService } from "./services/speech-synthesis.service";
import { TRexService } from './services/trex.service';
import { ChartComponent } from './chart/chart.component';
import { SpeedGaugeComponent } from './speed-gauge/speed-gauge.component';

@NgModule({
  declarations: [
    AppComponent,
    JoystickComponent,
    CameraComponent,
    ChartComponent,
    CompassComponent,
    StatsComponent,
    SpeedGaugeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    NgxChartsModule,
    StoreModule.forRoot(trexReducer)
  ],
  providers: [
    SpeechSynthesisService,
    TRexService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
