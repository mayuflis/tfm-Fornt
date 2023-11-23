import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { TutorInfoPageComponent } from './pages/tutor-info-page/tutor-info-page.component';
import { StudentInfoPageComponent } from './pages/student-info-page/student-info-page.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  { path: 'registro', component: RegisterPageComponent },
  { path: 'tutor-info/:idTutor', component: TutorInfoPageComponent },
  { path: 'student-info/:idStudent', component: StudentInfoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
