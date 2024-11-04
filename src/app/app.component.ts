import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DaughterComponent } from './Counter/daughter/daughter.component';
import { GranddaughterComponent } from './Counter/granddaughter/granddaughter.component';
import { Store } from '@ngrx/store';
import * as actions from "./Counter/counter.actions";
import { AppState } from './app.reducer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DaughterComponent,
    GranddaughterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'counter-app-without-redux';
  counter!: number;

  constructor(private store: Store<AppState>) {
    // this.counter = 20;

    this.store.select('counter').subscribe((counter) => {
      this.counter = counter;
    });
  }

  increase(): void {
    // this.counter += 1;

    this.store.dispatch(actions.increment());
  }

  decrease(): void {
    // this.counter -= 1;

    this.store.dispatch(actions.decrement());
  }
}
