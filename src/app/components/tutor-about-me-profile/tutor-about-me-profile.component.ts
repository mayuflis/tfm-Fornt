import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { itemToken } from 'src/app/services/subjectsprices.service';
import { AboutMe, UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-tutor-about-me-profile',
  templateUrl: './tutor-about-me-profile.component.html',
  styleUrls: ['./tutor-about-me-profile.component.css']
})
export class TutorAboutMeProfileComponent {
  aboutForm: FormGroup;
  usersService = inject(UsersService);
  aboutMeInfo: AboutMe | any;
  updatedUserDone: boolean = false;
  updatedUserError: boolean = false; 

  constructor() {
    this.aboutForm = new FormGroup({
      description_prof: new FormControl('', [Validators.minLength(20), Validators.maxLength(400)]),
      
      
      title_prof: new FormControl('', [Validators.minLength(2), Validators.maxLength(50)]),
      description_class: new FormControl('', [Validators.minLength(20), Validators.maxLength(400)])

    }) 
  }

  async ngOnInit() {
    const token = localStorage.getItem('token');
    const decode: itemToken = jwtDecode(token!);
    const idSesion: number = decode.user_id;
    
    try {
      const response = await this.usersService.getAboutMeInfo(idSesion)
      if (response === undefined) {
        alert('No se han podido obtener los datos de Sobre Mi ')
      } 
      else {
        this.aboutMeInfo = response
        this.aboutForm.patchValue({
          description_prof: this.aboutMeInfo.description_prof,
          title_prof: this.aboutMeInfo.title_prof,
          description_class: this.aboutMeInfo.description_class
        })

      }
    } catch (error) {
      console.log(error)
    }
  }

  async sendAboutMe() {
    try {
      const updateValue = this.aboutForm.value
      
      const result = await this.usersService.updateAboutMe(updateValue, this.aboutMeInfo.idusers)
      
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
      this.aboutForm.get(formControlName)?.hasError(validator) &&
      this.aboutForm.get(formControlName)?.touched
    );
  }

}
