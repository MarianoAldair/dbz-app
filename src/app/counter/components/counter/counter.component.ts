import { Component } from "@angular/core";

@Component({
  selector: 'common-counter',
  template: `
  <h4>Counter: {{ counter }} </h4>
  <button (click)="decreaseCounterByOne()" class="btn btn-outline-primary me-2 mb-2">-1</button>
  <button (click)="increaseCounterByOne()" class="btn btn-outline-primary me-2 mb-2">+1</button>
  <button (click)="resetCounter()" class="btn btn-outline-primary mb-2">Reset</button>
  `,
})
export class CounterComponent {

  public counter: number = 0;

  increaseCounterByOne() {
    this.counter++;
  }

  decreaseCounterByOne() {
    this.counter--;
  }

  resetCounter() {
    this.counter = 0;
  }

}
