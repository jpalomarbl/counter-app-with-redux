import { Component } from '@angular/core';
import { GranddaughterComponent } from '../granddaughter/granddaughter.component';
import { Store } from '@ngrx/store';
import * as actions from '../counter.actions';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-daughter',
  standalone: true,
  imports: [GranddaughterComponent],
  // inputs: ['counter'],
  // outputs: ['changeCounter'],
  templateUrl: './daughter.component.html',
  styleUrl: './daughter.component.scss'
})
export class DaughterComponent {
  counter!: number;
  // changeCounter = new EventEmitter<number>();

  constructor(private store: Store<AppState>) {
    this.store
      .select('counter')
      .subscribe((counter) => { this.counter = counter; });
  }

  duplicate(): void {
    // this.counter *= 2;
    // this.changeCounter.emit(this.counter);

    this.store.dispatch(actions.duplication({ number: 2 }));
  }

  // resetGrandDaughter(newCounter: number): void {
  //   this.counter = newCounter;
  //   this.changeCounter.emit(this.counter);
  // }
}
