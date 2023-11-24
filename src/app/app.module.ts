import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbPaginationModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { TutorInfoPageComponent } from './pages/tutor-info-page/tutor-info-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProfileInfoPageComponent } from './pages/profile-info-page/profile-info-page.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { StudentCardComponent } from './components/student-card/student-card.component';
import { TutorCardComponent } from './components/tutor-card/tutor-card.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { CarrouselFilterComponent } from './components/carrousel-filter/carrousel-filter.component';
import { CarrouselMapComponent } from './components/carrousel-map/carrousel-map.component';
import { CarrouselBestRatingComponent } from './components/carrousel-best-rating/carrousel-best-rating.component';




@NgModule({
  declarations: [
    AppComponent,
    AuthHeaderComponent,
    LoginPageComponent,
    AuthFormComponent,
    RegisterPageComponent,
    AdminPageComponent,
    TutorInfoPageComponent,
    HomePageComponent,
    LandingPageComponent,
    ProfileInfoPageComponent,
    HomeHeaderComponent,
    LoginFormComponent,
    FooterComponent,
    StudentCardComponent,
    TutorCardComponent,
    CarrouselComponent,
    CarrouselFilterComponent,
    CarrouselMapComponent,
    CarrouselBestRatingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,NgbPaginationModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
