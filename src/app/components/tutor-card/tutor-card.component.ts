import { Component, Input } from '@angular/core';
import { TeacherCard } from 'src/app/interfaces/teacher-card.interface';

@Component({
  selector: 'app-tutor-card',
  templateUrl: './tutor-card.component.html',
  styleUrls: ['./tutor-card.component.css']
})
export class TutorCardComponent {
  @Input() teacher: TeacherCard | any;
  @Input() showContactButton: boolean = true;
  @Input() showEmail: boolean = true;
  @Input() showSimpleTags: boolean = true;
  @Input() showDetailedTags: boolean = true;


}
