import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectspricesService } from 'src/app/services/subjectsprices.service';

type MyTutors = {
  user_name: string;
  last_name: string;
  email: string;
  mobile: string;
  subject_name: string;
};

@Component({
  selector: 'app-student-mytutor-card',
  templateUrl: './student-mytutor-card.component.html',
  styleUrls: ['./student-mytutor-card.component.css'],
})
export class StudentMytutorCardComponent {
  private activatedRoute = inject(ActivatedRoute);
  private myTutorsService = inject(SubjectspricesService);
  private tutorInfo!: MyTutors[];
  async ngOnInit() {
    this.tutorInfo = await this.myTutorsService.getMyTutorsInfo();
    const tutorsTableBody = document.getElementById('tutors-table-body');

    if (tutorsTableBody && this.tutorInfo && this.tutorInfo.length > 0) {
      this.tutorInfo.forEach((tutor) => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = `${tutor.user_name || ''} ${
          tutor.last_name || ''
        }`;
        row.appendChild(nameCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = tutor.email || '';
        row.appendChild(emailCell);

        const phoneCell = document.createElement('td');
        phoneCell.textContent = tutor.mobile || '';
        row.appendChild(phoneCell);

        const subjectCell = document.createElement('td');
        subjectCell.textContent = tutor.subject_name || '';
        row.appendChild(subjectCell);

        tutorsTableBody.appendChild(row);
      });
    } else {
      console.log('No tienes profesores');
    }
  }
}
