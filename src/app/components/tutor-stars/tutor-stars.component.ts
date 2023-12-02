import { CommonModule} from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutor-stars',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './tutor-stars.component.html',
  styleUrls: ['./tutor-stars.component.css']
})
export class TutorStarsComponent implements OnInit {
  @Input() starsCount: number = 0;

  // Creamos un array con 5 elementos, inicializados a 0
  starsArray: number[] = Array(5).fill(0);

  constructor() {
    // Marcamos las estrellas doradas según la calificación
    this.starsArray.fill(1, 0, this.starsCount);
  }
  ngOnInit() {
    this.starsArray.fill(1, 0, this.starsCount);
  }
}
