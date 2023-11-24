import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TutorStarsComponent } from './components/tutor-stars/tutor-stars.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'tutor-stars', component: TutorStarsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
