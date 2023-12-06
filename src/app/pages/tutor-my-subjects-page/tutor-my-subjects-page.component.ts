import { Component, inject, Input } from '@angular/core';
import { Subjects } from 'src/app/interfaces/WebPublic';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-tutor-my-subjects-page',
  templateUrl: './tutor-my-subjects-page.component.html',
  styleUrls: ['./tutor-my-subjects-page.component.css'],
})
export class TutorMySubjectsPageComponent {
  private techersUser = inject(TeachersService);
  private subjects!: Subjects[];
  private dataSubject!: Subjects;

  async ngOnInit() {
    try {
      // Se obtienen las asignaturas
      this.subjects = await this.techersUser.getSubjects();
      // Si hay más de una asignatura
      if (this.subjects.length > 1) {
        for (const asig of this.subjects) {
          // Obtiene la cantidad de estudiantes para cada asignatura
          this.dataSubject = await this.techersUser.getAmountStudents(
            asig.idsubjects
          );
          // Actualiza la propiedad NumberOfStudents en cada asignatura con la cantidad obtenida
          asig.NumberOfStudents = this.dataSubject.NumberOfStudents;
        }
      } else {
        // Si solo hay una asignatura, obtiene la cantidad de estudiantes para esa asignatura
        this.dataSubject = await this.techersUser.getAmountStudents(
          this.subjects[0].idsubjects
        );
        // Actualiza la propiedad NumberOfStudents en la primera asignatura del arreglo con la cantidad obtenida
        this.subjects[0].NumberOfStudents = this.dataSubject.NumberOfStudents;
      }
    } catch (error) {
      console.error(error);
    }
  }

  getSubject() {
    return this.subjects;
  }
}
