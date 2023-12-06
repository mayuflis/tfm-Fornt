import { Component, Input } from '@angular/core';
import { TeacherCard } from 'src/app/interfaces/teacher-card.interface';

@Component({
  selector: 'app-tutor-personal-info',
  templateUrl: './tutor-personal-info.component.html',
  styleUrls: ['./tutor-personal-info.component.css']
})
export class TutorPersonalInfoComponent {
  @Input() myTeacher: TeacherCard | any;


}

window.addEventListener('DOMContentLoaded', () => {
  const tutorId = 123;

  fetch(`http://localhost:3000/api/tutor-control-panel/${tutorId}/info`)
    .then((response) => response.json() as Promise<{ description_prof: string; title_prof: string; description_class: string; name: string; last_name: string }[]>)
    .then((data) => {
      const tutorInfo = data[0]; 

      if (tutorInfo) {
        const {
          description_prof,
          title_prof,
          description_class,
          name,
          last_name
        } = tutorInfo;

        const descriptionProfElement = document.getElementById('description-prof');
        if (descriptionProfElement) {
          descriptionProfElement.textContent = description_prof || '';
        }

        const titleProfElement = document.getElementById('title-prof');
        if (titleProfElement) {
          titleProfElement.textContent = title_prof || '';
        }

        const descriptionClassElement = document.getElementById('description-class');
        if (descriptionClassElement) {
          descriptionClassElement.textContent = description_class || '';
        }

        const nameElement = document.getElementById('tutor-name');
        if (nameElement) {
          nameElement.textContent = name || '';
        }

        const lastNameElement = document.getElementById('tutor-lastname');
        if (lastNameElement) {
          lastNameElement.textContent = last_name || '';
        }
      } else {
        console.error('No se encontraron datos para el tutor con ID:', tutorId);
      }
    })
    .catch((error) => {
      console.error('Error al obtener los datos:', error);
    });
});
