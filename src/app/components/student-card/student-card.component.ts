
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {

  ngOnInit() {
    this.fetchUserData();
  }

  fetchUserData() {
    const userId = 222;

    fetch(`http://localhost:3000/api/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          const user = data[0];

          const userImageElement = document.getElementById('user-image') as HTMLImageElement;
          if (userImageElement && user.image) {
            userImageElement.src = user.image;
          }

          const userNameElement = document.getElementById('user-name');
          if (userNameElement !== null) {
            userNameElement.textContent = user.name || '';
          }

          const userLastNameElement = document.getElementById('user-lastname');
          if (userLastNameElement !== null) {
            userLastNameElement.textContent = user.last_name || '';
          }

          const userBirthdayElement = document.getElementById('user-birthday');
          if (userBirthdayElement !== null) {
            const birthday = new Date(user.birthday);
            userBirthdayElement.textContent = birthday.toLocaleDateString() || '';
          }

          const userProvinceElement = document.getElementById('user-province');
          if (userProvinceElement !== null) {
            userProvinceElement.textContent = user.province || '';
          }
        } else {
          console.error('No se encontraron datos para el usuario con ID:', userId);
        }
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  }
}

