import { Component } from '@angular/core';
import { Subject } from 'src/app/interfaces/subject.model';
import { SubjectService } from 'src/app/services/subject-service.service';

@Component({
  selector: 'app-admin-subjects-table',
  templateUrl: './admin-subjects-table.component.html',
  styleUrls: ['./admin-subjects-table.component.css']
})
export class AdminSubjectsTableComponent {
  subjects: Subject[] = [];

  constructor(private subjectService: SubjectService) {}

  ngOnInit() {
    this.subjectService.getSubjects().subscribe(data => {
      this.subjects = data;
    });
  }


  deleteSubject(subjectId: number) {
    this.subjectService.deleteSubject(subjectId).subscribe(() => {
      this.subjects = this.subjects.filter(subject => subject.subjectId !== subjectId);
    });
  }
}
