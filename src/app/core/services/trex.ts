import { Http } from '@angular/http';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromTrex from '../../core/reducers/trex';
import { Injectable } from '@angular/core';

@Injectable()
export class TRexService {

  private ws: WebSocket;

  constructor(
    private store: Store<fromRoot.State>,
    private http: Http
  ) {
    this.ws = new WebSocket("ws://rpi2:3000");
    let me = this;
    this.ws.onmessage = function (event) {
      let data = JSON.parse(event.data);
      me.store.dispatch(new fromTrex.Update(data));
    };
  }

  motors(lmSpeed: number, rmSpeed: number) {
    this.ws.send(JSON.stringify({ action: 'motors', lmSpeed: lmSpeed, rmSpeed: rmSpeed }));
  }

  photo() {
    this.ws.send(JSON.stringify({ action: 'photo' }));
  }

  status() {
    this.ws.send(JSON.stringify({ action: 'status' }));
  }

  talk(text: string) {
    this.ws.send(JSON.stringify({ action: 'talk', text: text }));
  }

}
