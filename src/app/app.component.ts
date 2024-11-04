import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DaughterComponent } from './Counter/daughter/daughter.component';
import { GranddaughterComponent } from './Counter/granddaughter/granddaughter.component';
import { Store } from '@ngrx/store';
import { decrement, increment } from "./Counter/counter.actions";

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

  constructor(private store: Store<{ counter: number }>) {
    // this.counter = 20;

    this.store.subscribe((state) => {
      this.counter = state.counter;
    });
  }

  increase(): void {
    // this.counter += 1;

    this.store.dispatch(increment());
  }

  decrease(): void {
    // this.counter -= 1;

    this.store.dispatch(decrement());
  }
}
