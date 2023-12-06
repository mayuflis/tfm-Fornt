import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { TutorInfoPageComponent } from './pages/tutor-info-page/tutor-info-page.component';
import { StudentInfoPageComponent } from './pages/student-info-page/student-info-page.component';
import { TutorProfilePageComponent } from './pages/tutor-profile-page/tutor-profile-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TutorMySubjectsPageComponent } from './pages/tutor-my-subjects-page/tutor-my-subjects-page.component';
import { StudentProfilePageComponent } from './pages/student-profile-page/student-profile-page.component';
import { StudentMyTutorsPageComponent } from './pages/student-my-tutors-page/student-my-tutors-page.component';
import { TutorNotificationsPageComponent } from './pages/tutor-notifications-page/tutor-notifications-page.component';
import { TutorOpinionsPageComponent } from './pages/tutor-opinions-page/tutor-opinions-page.component';
import { StudentClassesPageComponent } from './pages/student-classes-page/student-classes-page.component';
import { StudentNotificationsPageComponent } from './pages/student-notifications-page/student-notifications-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';


import { ContactTutorPageComponent } from './pages/contact-tutor-page/contact-tutor-page.component';
import { TutorMyClassesPageComponent } from './pages/tutor-my-classes-page/tutor-my-classes-page.component';

import { authRoleStudentsGuard } from './guards/auth-roleStudents.guard';
import { authRoleTeachersGuard } from './guards/auth-roleTeachers.guard';
import { notLoginGuard } from './guards/not-login.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent   },
  { path: 'registro', component: RegisterPageComponent },
  { path: 'details/:idTutor', component: DetailPageComponent },


  { path: 'tutor/:idTutor/info', component: TutorInfoPageComponent },

  { path: 'tutor/subjects', component: TutorMySubjectsPageComponent },
  { path: 'tutor/:idTutor/students', component: TutorMyStudentsPageComponent },
  {
    path: 'tutor/:idTutor/notifications',
    component: TutorNotificationsPageComponent,
  },


  { path: 'tutor/:idTutor/classes', component: TutorMyClassesPageComponent },
  { path: 'tutor/:idTutor/notifications', component: TutorNotificationsPageComponent },

  { path: 'tutor/:idTutor/opinions', component: TutorOpinionsPageComponent },
  { path: 'tutor/:idTutor/profile', component: TutorProfilePageComponent },
  { path: 'tutor/:idTutor/contact-tutor', component: ContactTutorPageComponent},

  /*
  { path: 'tutor/:idTutor/info', canActivate: [authRoleTeachersGuard], component: TutorInfoPageComponent,  },
  { path: 'tutor/subjects',   canActivate: [authRoleTeachersGuard],     component: TutorMySubjectsPageComponent,  },
  {  path: 'tutor/:idTutor/students',     canActivate: [authRoleTeachersGuard],     component: TutorMyStudentsPageComponent,   },
  {     path: 'tutor/:idTutor/notifications',     canActivate: [authRoleTeachersGuard],     component: TutorNotificationsPageComponent,  },
  { path: 'tutor/:idTutor/opinions', component: TutorOpinionsPageComponent },
  {     path: 'tutor/:idTutor/profile',     canActivate: [authRoleTeachersGuard],
    component: TutorProfilePageComponent,
  },

  {
    path: 'student/:idStudent/info',
    canActivate: [authRoleStudentsGuard],
    component: StudentInfoPageComponent,
  },
  */


  { path: 'student/:idStudent/info', component: StudentInfoPageComponent },



/* 
  { path: 'tutor-profile/:idTutor', component: TutorProfilePageComponent },
  { path: 'tutor/:idTutor/students', component: TutorMyStudentsPageComponent },
  */

  { path: 'student/:idStudent/info', component: StudentInfoPageComponent },
  { path: 'student/:idStudent/classes', component: StudentClassesPageComponent },
  { path: 'student/:idStudent/tutors', component: StudentMyTutorsPageComponent},
  { path: 'student/:idStudent/notifications', component: StudentNotificationsPageComponent },
  { path: 'student/:idStudent/profile', component: StudentProfilePageComponent }
  



  { path: 'details/:idTutor', component: DetailPageComponent },

  // { path: 'student/:idStudent/teachers', component: StudentMyTeachersPageComponent },
  // { path: 'tutor-students/:idTutor', component: TutorStudentsPageComponent },
  
   /*
  { path: 'student-tutors/:idStudent',     component: StudentMyTutorsPageComponent,
  },
  {     path: 'student-notifications/:idStudent',     component: StudentNotificationsPageComponent,   },

  { path: 'tutor/subjects', component: TutorMySubjectsPageComponent },

  {     path: 'student/classes',     canActivate: [authRoleStudentsGuard],     component: StudentClassesPageComponent,
  },
  {     path: 'student/:idStudent/tutors',     canActivate: [authRoleStudentsGuard],     component: StudentMyTutorsPageComponent,
  },
  {     path: 'student/:idStudent/notifications',     component: StudentNotificationsPageComponent,
  },
  {
    path: 'student/:idStudent//profile',    component: StudentProfilePageComponent,
  },

  {
    path: 'student/:idStudent/profile',
    canActivate: [authRoleStudentsGuard],
    component: StudentProfilePageComponent,
  },
  */


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
