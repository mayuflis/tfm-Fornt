import { Component, Input } from '@angular/core';
import { TeacherCard } from 'src/app/interfaces/teacher-card.interface';

@Component({
  selector: 'app-tutor-personal-info',
  templateUrl: './tutor-personal-info.component.html',
  styleUrls: ['./tutor-personal-info.component.css']
})
export class TutorPersonalInfoComponent {
  @Input() myTeacher: TeacherCard | any;


}
