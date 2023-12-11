import { Component } from '@angular/core';
import { Teacher } from 'src/app/interfaces/teacher.model';
import { TeacherService } from 'src/app/services/teacher-service.service';

@Component({
  selector: 'app-admin-all-teachers-table',
  templateUrl: './admin-all-teachers-table.component.html',
  styleUrls: ['./admin-all-teachers-table.component.css']
})
export class AdminAllTeachersTableComponent {
  teachers: Teacher[] = [];

  constructor(private teacherService: TeacherService) {}

  ngOnInit() {
    this.teacherService.getTeachers().subscribe(data => {
      this.teachers = data;
    });
  }

  rejectTeacher(teacher: Teacher) {
    this.teacherService.updateTeacherStatus(teacher.teacherId, false).subscribe(() => {
      teacher.validate = false;
    });
  }
}
