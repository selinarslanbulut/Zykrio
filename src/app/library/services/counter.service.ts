import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService{
  private count = 0;

  getCount() {
    return this.count;
  }

  increment() {
    this.count++;
  }

  reset() {
    this.count = 0;
  }
}
