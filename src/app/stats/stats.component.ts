import { Component, OnInit } from '@angular/core';
import { TRexService } from '../services/trex.service';
import { SpeechSynthesisService } from "../services/speech-synthesis.service";
import { Widget } from "../widget/widget";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent extends Widget implements OnInit {

  public status: any;

  constructor(
    private tRexService: TRexService,
    private speechSynthesis: SpeechSynthesisService
  ) {
    super();
  }

  ngOnInit() {
    this.tRexService.getStatus().subscribe(data => {
      this.status = data;
    });
  }

}
