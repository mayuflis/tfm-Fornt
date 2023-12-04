import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { TutorInfoPageComponent } from './pages/tutor-info-page/tutor-info-page.component';
import { StudentInfoPageComponent } from './pages/student-info-page/student-info-page.component';
import { TutorProfilePageComponent } from './pages/tutor-profile-page/tutor-profile-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TutorMyStudentsPageComponent } from './pages/tutor-my-students-page/tutor-my-students-page.component';
import { TutorMySubjectsPageComponent } from './pages/tutor-my-subjects-page/tutor-my-subjects-page.component';
import { StudentProfilePageComponent } from './pages/student-profile-page/student-profile-page.component';
import { StudentMyTeachersPageComponent } from './pages/student-my-teachers-page/student-my-teachers-page.component';
import { TutorClassesPageComponent } from './pages/tutor-classes-page/tutor-classes-page.component';
import { TutorStudentsPageComponent } from './pages/tutor-students-page/tutor-students-page.component';
import { TutorNotificationsPageComponent } from './pages/tutor-notifications-page/tutor-notifications-page.component';
import { TutorOpinionsPageComponent } from './pages/tutor-opinions-page/tutor-opinions-page.component';
import { StudentClassesPageComponent } from './pages/student-classes-page/student-classes-page.component';
import { StudentTutorsPageComponent } from './pages/student-tutors-page/student-tutors-page.component';
import { StudentNotificationsPageComponent } from './pages/student-notifications-page/student-notifications-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'registro', component: RegisterPageComponent },
  { path: 'tutor-info/:idTutor', component: TutorInfoPageComponent },
  { path: 'student-info/:idStudent', component: StudentInfoPageComponent },
  { path: 'tutor-profile/:idTutor', component: TutorProfilePageComponent },
  { path: 'tutor/:idTutor/students', component: TutorMyStudentsPageComponent },
  { path: 'tutor/:idTutor/subjects', component: TutorMySubjectsPageComponent },
  { path: 'student-profile/:idStudent', component: StudentProfilePageComponent },
  { path: 'student/:idStudent/teachers', component: StudentMyTeachersPageComponent },
  { path: 'details/:idTutor', component: DetailPageComponent },
  { path: 'tutor-info/:idTutor', component: TutorInfoPageComponent },
  { path: 'tutor-students/:idTutor', component: TutorStudentsPageComponent },
  { path: 'tutor-classes/:idTutor', component: TutorClassesPageComponent },
  { path: 'tutor-notifications/:idTutor', component: TutorNotificationsPageComponent },
  { path: 'student-classes/:idStudent', component: StudentClassesPageComponent },
  { path: 'tutor-opinions/:idTutor', component: TutorOpinionsPageComponent },
  { path: 'student-tutors/:idStudent', component: StudentTutorsPageComponent },
  { path: 'student-notifications/:idStudent', component: StudentNotificationsPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
