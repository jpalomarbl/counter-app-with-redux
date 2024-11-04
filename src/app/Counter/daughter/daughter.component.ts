import { Component, Input, EventEmitter } from '@angular/core';
import { GranddaughterComponent } from '../granddaughter/granddaughter.component';
import { Store } from '@ngrx/store';
import { duplication } from '../counter.actions';

@Component({
  selector: 'app-daughter',
  standalone: true,
  imports: [GranddaughterComponent],
  inputs: ['counter'],
  outputs: ['changeCounter'],
  templateUrl: './daughter.component.html',
  styleUrl: './daughter.component.scss'
})
export class DaughterComponent {
  counter!: number;
  // changeCounter = new EventEmitter<number>();

  constructor(private store: Store<{ counter: number }>) {
    this.store.subscribe((state) => {
      this.counter = state.counter;
    });
  }

  duplicate(): void {
    // this.counter *= 2;
    // this.changeCounter.emit(this.counter);

    this.store.dispatch(duplication());
  }

  // resetGrandDaughter(newCounter: number): void {
  //   this.counter = newCounter;
  //   this.changeCounter.emit(this.counter);
  // }
}
