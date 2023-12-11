import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgbPaginationModule,
  NgbAlertModule,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UserInterceptor } from './interceptors/user.interceptor';
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

import { TutorStarsComponent } from './components/tutor-stars/tutor-stars.component';
import { CommentComponent } from './components/comment/comment.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { TutorProfilePageComponent } from './pages/tutor-profile-page/tutor-profile-page.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
import { TutorSubjectsComponent } from './components/tutor-subjects/tutor-subjects.component';
import { TutorMystudentCardComponent } from './components/tutor-mystudent-card/tutor-mystudent-card.component';
import { TutorMySubjectsPageComponent } from './pages/tutor-my-subjects-page/tutor-my-subjects-page.component';
import { TutorMySubjectsCardComponent } from './components/tutor-my-subjects-card/tutor-my-subjects-card.component';
import { StudentProfilePageComponent } from './pages/student-profile-page/student-profile-page.component';
import { StudentLearningComponent } from './components/student-learning/student-learning.component';
import { TutorSubjectsNewComponent } from './components/tutor-subjects-new/tutor-subjects-new.component';
import { FilterProfessorsComponent } from './components/filter-professors/filter-professors.component';
import { TutorNotificationsPageComponent } from './pages/tutor-notifications-page/tutor-notifications-page.component';
import { TutorOpinionsPageComponent } from './pages/tutor-opinions-page/tutor-opinions-page.component';
import { StudentClassesPageComponent } from './pages/student-classes-page/student-classes-page.component';
import { StudentNotificationsPageComponent } from './pages/student-notifications-page/student-notifications-page.component';
import { MapComponent } from './components/map/map.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';

import { TutorPersonalInfoComponent } from './components/tutor-personal-info/tutor-personal-info.component';
import { TableSubjectPriceComponent } from './components/table-subject-price/table-subject-price.component';
import { StudentPersonalInfoComponent } from './components/student-personal-info/student-personal-info.component';
import { StudentInfoPageComponent } from './pages/student-info-page/student-info-page.component';

import { StudentMyTutorsPageComponent } from './pages/student-my-tutors-page/student-my-tutors-page.component';

/*import { TutorNewAdComponent } from './components/tutor-new-ad/tutor-new-ad.component';
import { TutorAdsComponent } from './components/tutor-ads/tutor-ads.component';
*/

import { TutorAboutMeProfileComponent } from './components/tutor-about-me-profile/tutor-about-me-profile.component';
import { StudentMytutorCardComponent } from './components/student-mytutor-card/student-mytutor-card.component';
import { ContactTutorPageComponent } from './pages/contact-tutor-page/contact-tutor-page.component';
import { ContactTutorFormComponent } from './components/contact-tutor-form/contact-tutor-form.component';
import { TutorMyClassesPageComponent } from './pages/tutor-my-classes-page/tutor-my-classes-page.component';
import { TutorClassCardComponent } from './components/tutor-class-card/tutor-class-card.component';
import { StudentAboutMeProfileComponent } from './components/student-about-me-profile/student-about-me-profile.component';
import { MapDetailsComponent } from './components/map-details/map-details.component';
import { Error404Component } from './components/error404/error404.component';
import { StudentsClassesCardComponent } from './components/students-classes-card/students-classes-card.component';
import { ChooseClassComponent } from './components/choose-class/choose-class.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';

/*
import { MapDetailsComponent } from './components/map-details/map-details.component';
import { StudentMyTutorsPageComponent } from './pages/student-my-tutors-page/student-my-tutors-page.component';
import { StudentMytutorCardComponent } from './components/student-mytutor-card/student-mytutor-card.component';
import { TutorNewAdComponent } from './components/tutor-new-ad/tutor-new-ad.component';
import { TutorAdsComponent } from './components/tutor-ads/tutor-ads.component';
*/

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
    CommentComponent,
    TutorProfilePageComponent,
    ProfileFormComponent,
    ProfilePictureComponent,
    TutorSubjectsComponent,
    TutorMystudentCardComponent,
    TutorMySubjectsPageComponent,
    TutorMySubjectsCardComponent,
    StudentProfilePageComponent,
    StudentLearningComponent,
    StudentMyTutorsPageComponent,
    TutorSubjectsNewComponent,
    ProfileFormComponent,
    FilterProfessorsComponent,
    MapComponent,
    StudentProfilePageComponent,
    TutorNotificationsPageComponent,
    TutorOpinionsPageComponent,
    StudentClassesPageComponent,
    StudentNotificationsPageComponent,
    MapComponent,
    HomePageComponent,
    TutorPersonalInfoComponent,
    TableSubjectPriceComponent,
    StudentPersonalInfoComponent,
    StudentInfoPageComponent,

    TutorAboutMeProfileComponent,
    StudentMytutorCardComponent,

    ContactTutorPageComponent,
    ContactTutorFormComponent,
    TutorMyClassesPageComponent,
    TutorClassCardComponent,
    StudentAboutMeProfileComponent,
    MapDetailsComponent,
    Error404Component,
    StudentsClassesCardComponent,
    ChooseClassComponent,
    Error404PageComponent,

    /*    
    TutorAdsComponent,
    TutorNewAdComponent,
    StudentMytutorCardComponent,

*/
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    NgbAlertModule,
    NgbPaginationModule,
    GoogleMapsModule,
    NgxPaginationModule,
    TutorStarsComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UserInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
