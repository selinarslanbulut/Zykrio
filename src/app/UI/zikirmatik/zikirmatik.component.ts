import {Component} from '@angular/core';
import {CounterService} from "../../library/services";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-zikirmatik',
  imports: [
    IonicModule,

  ],
  templateUrl: './zikirmatik.component.html'
})
export class ZikirmatikComponent  {
  constructor(
    public counterService: CounterService
  ) {}
}
