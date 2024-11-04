import { Component, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../counter.actions';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-granddaughter',
  standalone: true,
  imports: [],
  // inputs: ['counter'],
  // outputs: ['changeCounter'],
  templateUrl: './granddaughter.component.html',
  styleUrl: './granddaughter.component.scss'
})
export class GranddaughterComponent {
  counter!: number;
  changeCounter = new EventEmitter<number>();

  constructor(private store: Store<AppState>) {
    this.store
      .select('counter')
      .subscribe((counter) => { this.counter = counter; });
  }

  reset(): void {
    // this.counter = 0;
    // this.changeCounter.emit(this.counter);

    this.store.dispatch(actions.resetAction());
  }
}
