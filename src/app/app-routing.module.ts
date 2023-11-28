import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { TutorInfoPageComponent } from './pages/tutor-info-page/tutor-info-page.component';
import { StudentInfoPageComponent } from './pages/student-info-page/student-info-page.component';
import { TutorProfilePageComponent } from './pages/tutor-profile-page/tutor-profile-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TutorMyStudentsPageComponent } from './pages/tutor-my-students-page/tutor-my-students-page.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  { path: 'registro', component: RegisterPageComponent },
  {path: 'home', component: HomePageComponent},
  { path: 'tutor-info/:idTutor', component: TutorInfoPageComponent },
  { path: 'student-info/:idStudent', component: StudentInfoPageComponent },
  { path: 'tutor-profile/:idTutor', component: TutorProfilePageComponent },
  {path: 'tutor/:idTutor/students', component: TutorMyStudentsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
