import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { itemToken } from 'src/app/services/subjectsprices.service';
import { AboutMeStudent, UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-student-about-me-profile',
  templateUrl: './student-about-me-profile.component.html',
  styleUrls: ['./student-about-me-profile.component.css']
})
export class StudentAboutMeProfileComponent {
  aboutMeForm: FormGroup;
  usersService = inject(UsersService);
  aboutMeInfo: AboutMeStudent | any;
    updatedUserDone: boolean = false;
  updatedUserError: boolean = false; 


  constructor() {
    this.aboutMeForm = new FormGroup({
      aboutMe: new FormControl('', [Validators.required, Validators.minLength(20), Validators.maxLength(400)]),
      myInterests: new FormControl('', [Validators.required, Validators.minLength(20), Validators.maxLength(400)])
    })
  }

  async ngOnInit() {
    const token = localStorage.getItem('token');
    const decode: itemToken = jwtDecode(token!);
    const idSesion: number = decode.user_id;

    try {
      const response = await this.usersService.getAboutMeInfoStudent(idSesion)

      if (response === undefined) {
        alert('No se han podido obtener los datos de Sobre Mi ')
      } 
      else {
        this.aboutMeInfo = response
        this.aboutMeForm.patchValue({
          aboutMe: this.aboutMeInfo.aboutMe,
          myInterests: this.aboutMeInfo.myInterests
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  async sendForm() {
    try {
      const updateValue = this.aboutMeForm.value
      
      const result = await this.usersService.updateAboutMeStudent(updateValue, this.aboutMeInfo.idusers) 

      if (result) {
      this.updatedUserDone = true;

      setTimeout(() => {
        this.updatedUserDone = false;
      }, 3000);
    } else {
      this.updatedUserError = true;
    }
    } catch (error) {
      console.log(error)
    }
  }
    checkInput(formControlName: string, validator: string): boolean | undefined {
    return (
      this.aboutMeForm.get(formControlName)?.hasError(validator) &&
      this.aboutMeForm.get(formControlName)?.touched
    );
  }
}
