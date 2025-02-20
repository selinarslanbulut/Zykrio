import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ZikirmatikComponent } from './zikirmatik.component';
import {ApiService, CounterService} from "../../library/services";

@NgModule({
  declarations: [],
  imports: [CommonModule, IonicModule, ZikirmatikComponent],
  providers: [ApiService, CounterService], // ApiService ve CounterService'i buraya ekleyin
})
export class ZikirmatikModule {}
