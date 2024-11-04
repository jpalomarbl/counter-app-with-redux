import { Component, Input, EventEmitter } from '@angular/core';
import { GranddaughterComponent } from '../granddaughter/granddaughter.component';

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
  changeCounter = new EventEmitter<number>();

  constructor() {}

  duplicate(): void {
    this.counter *= 2;
    this.changeCounter.emit(this.counter);
  }

  resetGrandDaughter(newCounter: number): void {
    this.counter = newCounter;
    this.changeCounter.emit(this.counter);
  }
}
