import { Component } from '@angular/core';
import { TeachersWebPublic } from 'src/app/interfaces/WebPublic';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  filterOfTeachers!: TeachersWebPublic;

  //Función que obtiene los valores filtrado del componente FilterProfessosrs
  getFilterTeachers($event: TeachersWebPublic) {
    this.filterOfTeachers = $event;
    if (!$event.name) {
      console.log('No se han encontrado profesores con los filtros aplicados');
    }
    console.log(this.filterOfTeachers);
  }
}
