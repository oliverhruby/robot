import {Http} from '@angular/http';
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

  getStatus() {
    return this.http.get("http://192.168.0.103:3000/api/status");
  }

  forward() {
    this.ws.send('forward');
  }

  left() {
    this.ws.send('left');
  }

  right() {
    this.ws.send('right');
  }

  stop() {
    this.ws.send('stop');
  }

  photo() {
    this.ws.send('photo');
  }

}
