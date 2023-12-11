import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminAllTeachersTableComponent } from './components/admin-all-teachers-table/admin-all-teachers-table.component';
import { AdminPageUsersComponent } from './pages/admin-page-users/admin-page-users.component';
import { AdminPageTeachersComponent } from './pages/admin-page-teachers/admin-page-teachers.component';
import { AdminPageSubjectsComponent } from './pages/admin-page-subjects/admin-page-subjects.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

import { TutorInfoPageComponent } from './pages/tutor-info-page/tutor-info-page.component';
import { StudentInfoPageComponent } from './pages/student-info-page/student-info-page.component';
import { TutorProfilePageComponent } from './pages/tutor-profile-page/tutor-profile-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TutorMySubjectsPageComponent } from './pages/tutor-my-subjects-page/tutor-my-subjects-page.component';
import { StudentProfilePageComponent } from './pages/student-profile-page/student-profile-page.component';
import { StudentMyTutorsPageComponent } from './pages/student-my-tutors-page/student-my-tutors-page.component';
import { TutorOpinionsPageComponent } from './pages/tutor-opinions-page/tutor-opinions-page.component';
import { StudentClassesPageComponent } from './pages/student-classes-page/student-classes-page.component';
import { ContactTutorPageComponent } from './pages/contact-tutor-page/contact-tutor-page.component';
import { TutorMyClassesPageComponent } from './pages/tutor-my-classes-page/tutor-my-classes-page.component';

import { authRoleStudentsGuard } from './guards/auth-roleStudents.guard';
import { authRoleTeachersGuard } from './guards/auth-roleTeachers.guard';
import { notLoginGuard } from './guards/not-login.guard';
import { Error404Component } from './components/error404/error404.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'registro', component: RegisterPageComponent },

  { path: 'admin', component: AdminPageComponent }, //tendrá el id de adminitrador como parámetro
  { path: 'admin/profesores', component: AdminPageTeachersComponent },
  { path: 'admin/usuarios', component: AdminPageUsersComponent },
  { path: 'admin/asignaturas', component: AdminPageSubjectsComponent },

  { path: 'tutor/info', component: TutorInfoPageComponent },
  { path: 'tutor/info/:idTutor', component: TutorInfoPageComponent },
  {
    path: 'tutor/subjects',
    canActivate: [authRoleTeachersGuard],
    component: TutorMySubjectsPageComponent,
  },
  { path: 'tutor/classes', component: TutorMyClassesPageComponent },
  { path: 'tutor/opinions', component: TutorOpinionsPageComponent },
  { path: 'tutor/profile', component: TutorProfilePageComponent },
  {
    path: 'tutor/:idTutor/contact-tutor',
    component: ContactTutorPageComponent,
  },

  {
    path: 'student/info/:idStudent',
    // canActivate: [authRoleStudentsGuard, authRoleTeachersGuard],
    component: StudentInfoPageComponent,
  },

  {
    path: 'student/info',
    // canActivate: [authRoleStudentsGuard, authRoleTeachersGuard],
    component: StudentInfoPageComponent,
  },
  {
    path: 'student/classes',
    canActivate: [authRoleStudentsGuard],
    component: StudentClassesPageComponent,
  },
  {
    path: 'student/tutors',
    canActivate: [authRoleStudentsGuard],
    component: StudentMyTutorsPageComponent,
  },
  {
    path: 'student/profile',
    canActivate: [authRoleStudentsGuard],
    component: StudentProfilePageComponent,
  },

  { path: '**', component: Error404PageComponent },

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

  // {
  //   path: 'student/info',
  //   canActivate: [authRoleStudentsGuard],
  //   component: StudentInfoPageComponent,
  // },

  /*
  { path: 'tutor-profile/:idTutor', component: TutorProfilePageComponent },
  { path: 'tutor/:idTutor/students', component: TutorMyStudentsPageComponent },
  */

  /*{
    path: 'student/info/:idStudent',
    // canActivate: [authRoleStudentsGuard, authRoleTeachersGuard],
    component: StudentInfoPageComponent,
  },
  */

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
