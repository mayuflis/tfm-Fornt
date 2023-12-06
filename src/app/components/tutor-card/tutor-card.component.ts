import { Component, Input } from '@angular/core';
import { TeacherCard } from 'src/app/interfaces/teacher-card.interface';

@Component({
  selector: 'app-tutor-card',
  templateUrl: './tutor-card.component.html',
  styleUrls: ['./tutor-card.component.css']
})
export class TutorCardComponent {
  @Input() myTeacher: TeacherCard | any;

}
