import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

import { itemToken } from 'src/app/services/subjectsprices.service';

import { UserProfile, UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {
  profileForm: FormGroup;
  router = inject(Router)
  usersService = inject(UsersService);
  userProfile: UserProfile | any;
  id: number | any;
  updatedUserDone: boolean = false;
  updatedUserError: boolean = false; 

  constructor() {
    this.profileForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      last_name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      birthday: new FormControl('', [Validators.required]),
      name_province: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.minLength(9),
        Validators.maxLength(15)
      ]),
      gender: new FormControl('', []),
    });
  }

  async ngOnInit() {
    const token = localStorage.getItem('token');
    const decode: itemToken = jwtDecode(token!);
    const idSesion: number = decode.user_id;   
    try {
      const response = await this.usersService.getProfileInfo(idSesion);
      if (response === undefined) {
        alert('No se han podido obtener datos de Datos Personales')
      }
      else {
        this.userProfile = response
        const birthday = new Date(this.userProfile.birthday);
        this.profileForm.patchValue({
          name: this.userProfile.name,
          last_name: this.userProfile.last_name,
          birthday: birthday.toISOString().split('T')[0],
          name_province: this.userProfile.name_province,
          mobile: this.userProfile.mobile,
          gender: this.userProfile.gender,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

async sendFormData() {
  try {
    const updateValue = this.profileForm.value;

    const updatedUserProfile: UserProfile = {
      ...this.userProfile, 
      ...updateValue
    };

    const result = await this.usersService.updateInfo(updatedUserProfile, this.userProfile.idusers);

    if (result) {
      this.updatedUserDone = true;

      setTimeout(() => {
        this.updatedUserDone = false;
      }, 3000);
    } else {
      this.updatedUserError = true;
    }

  } catch (error) {
    console.error('Error al actualizar la información:', error);
  }
}
 


  checkInput(formControlName: string, validator: string): boolean | undefined {
    return (
      this.profileForm.get(formControlName)?.hasError(validator) &&
      this.profileForm.get(formControlName)?.touched
    );
  }
}
