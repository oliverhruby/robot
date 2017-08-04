import { Http } from '@angular/http';
import {
  Injectable
} from '@angular/core';

@Injectable()
export class TRexService {

  private ws: WebSocket;

  constructor(
    private http: Http
  ) {
    this.ws = new WebSocket("ws://192.168.0.103:3000");
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
