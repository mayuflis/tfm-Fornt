import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminAllTeachersTableComponent } from './components/admin-all-teachers-table/admin-all-teachers-table.component';
import { AdminPageUsersComponent } from './pages/admin-page-users/admin-page-users.component';
import { AdminPageTeachersComponent } from './pages/admin-page-teachers/admin-page-teachers.component';
import { AdminPageSubjectsComponent } from './pages/admin-page-subjects/admin-page-subjects.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'registro', component: RegisterPageComponent},
  {path: 'admin', component: AdminPageComponent}, //tendrá el id de adminitrador como parámetro
  {path: 'admin/profesores', component: AdminPageTeachersComponent},
  {path: 'admin/usuarios', component: AdminPageUsersComponent},
  {path: 'admin/asignaturas', component: AdminPageSubjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
