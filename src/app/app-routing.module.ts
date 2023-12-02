import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CommentComponent } from './components/comment/comment.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'comment', component: CommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
