import { Component } from '@angular/core';

@Component({
  selector: 'app-student-mytutor-card',
  templateUrl: './student-mytutor-card.component.html',
  styleUrls: ['./student-mytutor-card.component.css']
})
export class StudentMytutorCardComponent {

}

window.addEventListener('DOMContentLoaded', () => {
  const userId = 222;

  fetch(`http://localhost:3000/api/users/${userId}/teacher-info`)
    .then((response) => response.json() as Promise<{ name: string; last_name: string; email: string; mobile: string; }[]>)
    .then((data) => {
      const tutorsTableBody = document.getElementById('tutors-table-body');

      if (tutorsTableBody && data && data.length > 0) {
        data.forEach((tutor) => {
          const row = document.createElement('tr');

          const nameCell = document.createElement('td');
          nameCell.textContent = `${tutor.name || ''} ${tutor.last_name || ''}`;
          row.appendChild(nameCell);

          const emailCell = document.createElement('td');
          emailCell.textContent = tutor.email || '';
          row.appendChild(emailCell);

          const phoneCell = document.createElement('td');
          phoneCell.textContent = tutor.mobile || '';
          row.appendChild(phoneCell);

          const actionCell = document.createElement('td');
          const infoButton = document.createElement('button');
          infoButton.textContent = '+ Info';
          infoButton.classList.add('btn-3');
          actionCell.appendChild(infoButton);
          row.appendChild(actionCell);

          tutorsTableBody.appendChild(row);
        });
      } else {
        console.error('No se encontraron datos para el usuario con ID:', userId);
      }
    })
    .catch((error) => {
      console.error('Error al obtener los datos:', error);
    });
});

