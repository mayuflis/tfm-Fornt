import { Component } from '@angular/core';
import { Teacher } from 'src/app/interfaces/teacher.model';
import { TeacherService } from 'src/app/services/teacher-service.service';

@Component({
  selector: 'app-admin-teacher-table',
  templateUrl: './admin-teacher-table.component.html',
  styleUrls: ['./admin-teacher-table.component.css']
})
export class AdminTeacherTableComponent {
  teachers: Teacher[] = [];

  constructor(private teacherService: TeacherService) {}

  ngOnInit() {
    this.teacherService.getTeachers().subscribe(data => {
      this.teachers = data;
    });
  }

  validateTeacher(teacher: Teacher) {
    this.teacherService.updateTeacherStatus(teacher.teacherId, true).subscribe(() => {
      teacher.validate = true;
    });
  }

  rejectTeacher(teacher: Teacher) {
    this.teacherService.updateTeacherStatus(teacher.teacherId, false).subscribe(() => {
      teacher.validate = false;
    });
  }

}
