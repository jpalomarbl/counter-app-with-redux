import { Component, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { resetAction } from '../counter.actions';

@Component({
  selector: 'app-granddaughter',
  standalone: true,
  imports: [],
  inputs: ['counter'],
  outputs: ['changeCounter'],
  templateUrl: './granddaughter.component.html',
  styleUrl: './granddaughter.component.scss'
})
export class GranddaughterComponent {
  counter!: number;
  changeCounter = new EventEmitter<number>();

  constructor(private store: Store<{ counter: number }>) {
    this.store.subscribe((state) => {
      this.counter = state.counter;
    });
  }

  reset(): void {
    // this.counter = 0;
    // this.changeCounter.emit(this.counter);

    this.store.dispatch(resetAction());
  }
}
