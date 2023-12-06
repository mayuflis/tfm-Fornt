import { Component, Input } from '@angular/core';
import { Subjects } from 'src/app/interfaces/WebPublic';

@Component({
  selector: 'app-tutor-my-subjects-card',
  templateUrl: './tutor-my-subjects-card.component.html',
  styleUrls: ['./tutor-my-subjects-card.component.css'],
})
export class TutorMySubjectsCardComponent {
  @Input() datesOfSubjects!: Subjects;

  ngOnInit() {}
}
