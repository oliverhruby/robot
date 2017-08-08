import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
// import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { CoreModule } from './core/core.module';

// import { routes } from './routes';
import { reducers, metaReducers } from './reducers';

import { AppComponent } from './core/containers/app';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,

    // RouterModule.forRoot(routes, { useHash: true }),

     /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(reducers, { metaReducers }),

     /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    // StoreRouterConnectingModule,

    /**
     * Custom module for the core application logic
     */
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
