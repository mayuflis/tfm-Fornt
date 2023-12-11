import { Component } from '@angular/core';
import { Subject } from 'src/app/interfaces/subject.model';
import { SubjectService } from 'src/app/services/subject-service.service';

@Component({
  selector: 'app-admin-page-subjects',
  templateUrl: './admin-page-subjects.component.html',
  styleUrls: ['./admin-page-subjects.component.css']
})
export class AdminPageSubjectsComponent {
  newSubjectName = '';

  constructor(private subjectService: SubjectService) {}

  addNewSubject() {
    const newSubject: Subject = {
      name: this.newSubjectName,
      numberOfTeachers: 0,
    };

    this.subjectService.addSubject(newSubject).subscribe((createdSubject) => {
      //this.subjects.push(createdSubject);
      this.newSubjectName = '';
    });

  }

  
}
