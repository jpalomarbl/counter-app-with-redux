import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DaughterComponent } from './daughter/daughter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DaughterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'counter-app-without-redux';
  counter: number;

  constructor() {
    this.counter = 20;
  }

  increase(): void {
    this.counter += 1;
  }

  decrease(): void {
    this.counter -= 1;
  }
}
