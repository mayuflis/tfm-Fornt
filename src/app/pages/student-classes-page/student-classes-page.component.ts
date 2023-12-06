import { Component, inject } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

export type infoClass = {
  teachers_id_teachers: number;
  subject_name: string;
  level: string;
  teacher_name: string;
  email: string;
};

@Component({
  selector: 'app-student-classes-page',
  templateUrl: './student-classes-page.component.html',
  styleUrls: ['./student-classes-page.component.css'],
})
export class StudentClassesPageComponent {
  private teachersService = inject(StudentsService);
  private info!: infoClass[];
  async ngOnInit() {
    try {
      //Recibe la información de las clases que imparte el almuno
      this.info = await this.teachersService.getInfoClass();
    } catch (error) {
      console.error(error);
    }
  }

  getInfo(): infoClass[] {
    return this.info;
  }
}
