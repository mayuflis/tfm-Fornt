import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyTutors } from 'src/app/interfaces/teacher-card.interface';
import { SubjectspricesService } from 'src/app/services/subjectsprices.service';

@Component({
  selector: 'app-student-mytutor-card',
  templateUrl: './student-mytutor-card.component.html',
  styleUrls: ['./student-mytutor-card.component.css'],
}) //TODO: botón para ir directamente al profesor
export class StudentMytutorCardComponent {
  private activatedRoute = inject(ActivatedRoute);
  private myTutorsService = inject(SubjectspricesService);
  tutorInfo!: MyTutors[];
  async ngOnInit() {
    try {
      this.tutorInfo = await this.myTutorsService.getMyTutorsInfo();
      console.log(this.tutorInfo);
    } catch (error) {
      console.log(error);
    }
  }
}
