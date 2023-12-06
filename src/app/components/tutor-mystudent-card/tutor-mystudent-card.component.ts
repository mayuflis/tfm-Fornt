import { Component } from '@angular/core';

@Component({
  selector: 'app-tutor-mystudent-card',
  templateUrl: './tutor-mystudent-card.component.html',
  styleUrls: ['./tutor-mystudent-card.component.css']
})
export class TutorMystudentCardComponent {

}

window.addEventListener('DOMContentLoaded', () => {
  const teacherId = 123;

  fetch(`http://localhost:3000/api/teachers/teacher_info/${teacherId}`)
    .then((response) => response.json() as Promise<{ name: string; last_name: string; email: string; mobile: string; }[]>)
    .then((data) => {
      const studentsTableBody = document.getElementById('students-table-body');

      if (studentsTableBody && data && data.length > 0) {
        data.forEach((student) => {
          const row = document.createElement('tr');

          const nameCell = document.createElement('td');
          nameCell.textContent = `${student.name || ''} ${student.last_name || ''}`;
          row.appendChild(nameCell);

          const emailCell = document.createElement('td');
          emailCell.textContent = student.email || '';
          row.appendChild(emailCell);

          const phoneCell = document.createElement('td');
          phoneCell.textContent = student.mobile || '';
          row.appendChild(phoneCell);

          const actionCell = document.createElement('td');
          const infoButton = document.createElement('button');
          infoButton.textContent = '+ Info';
          infoButton.classList.add('btn-3');
          actionCell.appendChild(infoButton);
          row.appendChild(actionCell);

          studentsTableBody.appendChild(row);
        });
      } else {
        console.error('No se encontraron datos para el usuario con ID:', teacherId);
      }
    })
    .catch((error) => {
      console.error('Error al obtener los datos:', error);
    });
});
