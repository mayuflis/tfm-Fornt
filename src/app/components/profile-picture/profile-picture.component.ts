import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { itemToken } from 'src/app/services/subjectsprices.service';

import { UserProfile, UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent {
  activateInput: boolean = false;
  usersService = inject(UsersService);
  router = inject(Router);
  profilePicForm: FormGroup;
  userProfile: UserProfile |  any;
  
  constructor() {
    this.profilePicForm = new FormGroup({
        image: new FormControl('', [])
      });
  }

  async ngOnInit() {
    const token = localStorage.getItem('token');
    const decode: itemToken = jwtDecode(token!);
    const idSesion: number = decode.user_id;
    
    try {
      const response = await this.usersService.getProfileInfo(idSesion);
      if (response === undefined) {
        alert('No se ha podido obtener datos de Perfil')
        this.router.navigate(['/home'])
      }
      else {
        this.userProfile = response
        if (!this.userProfile.image) {
          this.userProfile.image = 'No se ha encontrado ninguna imagen. Inserte URL'
        }
        else {
          this.profilePicForm.patchValue({
            image: this.userProfile.image
          });
        }
      }
    
    } catch (error) {
      console.log(error)
    }
  }

  displayInput() {
    if (!this.activateInput) {
      this.activateInput = true
    }
  }
  cancel() {
    this.activateInput = false;
  }

  async sendPic() {
  try {
    const updatedImage = this.profilePicForm.get('image')?.value;
    const changeBirthdayFormat = new Date(this.userProfile.birthday).toISOString().split('T')[0]

    const updatedUserProfile: UserProfile = {
      ...this.userProfile,
      birthday: changeBirthdayFormat,
      image: updatedImage
    };
    const result = await this.usersService.updateInfo(updatedUserProfile, this.userProfile.idusers);
    location.reload()
  } catch (error) {
    console.error(error);
  }
}


  checkInput(formControlName: string, validator: string): boolean | undefined {
    return (
      this.profilePicForm.get(formControlName)?.hasError(validator) &&
      this.profilePicForm.get(formControlName)?.touched
    );
  }
}
