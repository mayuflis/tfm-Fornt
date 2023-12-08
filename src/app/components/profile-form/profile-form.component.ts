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

  constructor() {
    this.profileForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      birthdate: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
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
    console.log('id', idSesion)
    
    try {
      const response = await this.usersService.getProfileInfo(idSesion);
      if (response === undefined) {
        alert('No se han podido obtener datos de Mi Perfil')
        this.router.navigate(['/home'])
      }
      else {
        this.userProfile = response
    console.log('user', this.userProfile)

        const birthdate = new Date(this.userProfile.birthday);
        console.log('Fecha', birthdate)
        this.profileForm.patchValue({
          name: this.userProfile.name,
          surname: this.userProfile.last_name,
          birthdate: birthdate.toISOString().split('T')[0],
          city: this.userProfile.name_province,
          phone: this.userProfile.mobile,
          gender: this.userProfile.gender,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  sendFormData() {}

  checkInput(formControlName: string, validator: string): boolean | undefined {
    return (
      this.profileForm.get(formControlName)?.hasError(validator) &&
      this.profileForm.get(formControlName)?.touched
    );
  }
}
