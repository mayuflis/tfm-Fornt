import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeachersWebPublic } from 'src/app/interfaces/WebPublic';
import { TeacherCard } from 'src/app/interfaces/teacher-card.interface';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  activateRoute = inject(ActivatedRoute);
  teachersService = inject(TeachersService);
  teachers: TeacherCard[] = [];
  filterOfTeachers!: TeachersWebPublic;
  nombre = 'nombre';
  pagination: number = 5;
  // TODO: TopRatedUsers

  async ngOnInit(): Promise<void> {
    try {
      //Get all users
      this.teachers = await this.teachersService.getTeachersInfo();
    } catch (error) {
      console.log(error);
    }
  }

  //Función que obtiene los valores filtrado del componente FilterProfessosrs
  getFilterTeachers($event: TeachersWebPublic) {
    this.filterOfTeachers = $event;
    if (this.filterOfTeachers.idusers === 0) {
      console.log('No se han encontrado profesores con los filtros aplicados');
    }
    console.log(this.filterOfTeachers);
  }
}
