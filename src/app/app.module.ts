// modules
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
// components
import { AppComponent } from './app.component';
import { CameraComponent } from './camera/camera.component';
import { JoystickComponent } from './joystick/joystick.component';
import { StatsComponent } from './stats/stats.component';
// reducers
import { trexReducer } from './reducers/trex';
// services
import { SpeechSynthesisService } from "./services/speech-synthesis.service";
import { TRexService } from './services/trex.service';

@NgModule({
  declarations: [
    AppComponent,
    JoystickComponent,
    CameraComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.forRoot(trexReducer)
  ],
  providers: [
    SpeechSynthesisService,
    TRexService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
