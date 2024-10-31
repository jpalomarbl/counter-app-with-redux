import { Component, EventEmitter } from '@angular/core';

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

  constructor() {}

  reset(): void {
    this.counter = 0;
    this.changeCounter.emit(this.counter);
  }
}
