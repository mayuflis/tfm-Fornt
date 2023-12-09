import { Component, inject } from '@angular/core';
import { Student } from 'src/app/interfaces/student';
import { StudentsService } from 'src/app/services/students.service';
import { jwtDecode } from 'jwt-decode';
import { Token } from 'src/app/interfaces/token';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
  async ngOnInit() {
    if (this.token) {
      this.decode = jwtDecode(this.token);
      this.student = await this.studentService.getStudetnsDescriptions(
        this.decode.user_id
      );
    } else {
      Swal.fire('No tienes permisos!');
      this.router.navigate(['/login']);
    }
  }

  getStudents() {
    return this.student[0];
  }
}
