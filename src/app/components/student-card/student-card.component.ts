import { Component, OnInit, inject } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { StudentsService } from 'src/app/services/students.service';
import { itemToken } from 'src/app/services/subjectsprices.service';
import { differenceInYears, parseISO } from 'date-fns';
@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css'],
})
export class StudentCardComponent implements OnInit {
  private studentsService = inject(StudentsService);
  token = localStorage.getItem('token');
  decode: itemToken = jwtDecode(this.token!);
  idSesion: number = this.decode.user_id;
  async ngOnInit() {
    const data = await this.studentsService.getDataStudentsCards(this.idSesion);
    console.log(data);
    this.getUserData(data);
  }

  getUserData(data: any) {
    if (data && data.length > 0) {
      const user = data[0];

      const userImageElement = document.getElementById(
        'user-image'
      ) as HTMLImageElement;
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
        let birthday = parseISO(user.birthday);
        const age = differenceInYears(new Date(), birthday);
        let años = String(age);
        userBirthdayElement.textContent = años + ' años';
      }

      const userProvinceElement = document.getElementById('user-province');
      if (userProvinceElement !== null) {
        userProvinceElement.textContent = user.name_province || '';
      }
    } else {
      console.error(
        'No se encontraron datos para el usuario con ID:',
        data.idusers
      );
    }
  }
}
