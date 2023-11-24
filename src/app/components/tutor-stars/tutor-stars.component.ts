import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tutor-stars',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './tutor-stars.component.html',
  styleUrls: ['./tutor-stars.component.css']
})
export class TutorStarsComponent {
  @Input() starsCount: number = 1;

  // Creamos un array con 5 elementos, inicializados a 0
  starsArray: number[] = Array(5).fill(0);

  constructor() {
    // Marcamos las estrellas doradas según la calificación
    this.starsArray.fill(1, 0, this.starsCount);
  }
}
