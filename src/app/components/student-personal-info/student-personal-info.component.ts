import { Component, inject } from '@angular/core';
import { Student } from 'src/app/interfaces/student';
import { StudentsService } from 'src/app/services/students.service';
import { jwtDecode } from 'jwt-decode';
import { Token } from 'src/app/interfaces/token';
import { ActivatedRoute, Router } from '@angular/router';
export type name = {
  name: string;
};

@Component({
  selector: 'app-student-personal-info',
  templateUrl: './student-personal-info.component.html',
  styleUrls: ['./student-personal-info.component.css'],
})
export class StudentPersonalInfoComponent {
  private studentService = inject(StudentsService);
  private student!: Student[];
  private token: string = localStorage.getItem('token')!;
  private decode!: Token;
  private router = inject(Router);
  private name!: name[];
  private activatedRoute = inject(ActivatedRoute);
  async ngOnInit() {
    this.activatedRoute.params.subscribe(async (params: any) => {
      let id: number = params.idStudent;

      if (id) {
        this.student = await this.studentService.getStudetnsDescriptions(id);
        this.name = await this.studentService.getNameStudents(id);
      } else {
        this.decode = jwtDecode(this.token);
        this.student = await this.studentService.getStudetnsDescriptions(
          this.decode.user_id
        );
        this.name = await this.studentService.getNameStudents(
          this.decode.user_id
        );
      }
    });
  }

  getStudents() {
    return this.student[0];
  }
  getName() {
    return this.name[0].name;
  }
}
