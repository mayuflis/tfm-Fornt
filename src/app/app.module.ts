import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
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
import { TutorMenuComponent } from './components/tutor-menu/tutor-menu.component';
import { TutorProfilePageComponent } from './pages/tutor-profile-page/tutor-profile-page.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
import { TutorSubjectsComponent } from './components/tutor-subjects/tutor-subjects.component';
import { TutorMyStudentsPageComponent } from './pages/tutor-my-students-page/tutor-my-students-page.component';
import { TutorMystudentCardComponent } from './components/tutor-mystudent-card/tutor-mystudent-card.component';
import { TutorMySubjectsPageComponent } from './pages/tutor-my-subjects-page/tutor-my-subjects-page.component';
import { TutorMySubjectsCardComponent } from './components/tutor-my-subjects-card/tutor-my-subjects-card.component';
import { StudentProfilePageComponent } from './pages/student-profile-page/student-profile-page.component';
import { StudentLearningComponent } from './components/student-learning/student-learning.component';
import { StudentMyTeachersPageComponent } from './pages/student-my-teachers-page/student-my-teachers-page.component';
import { TutorProfileFormComponent } from './components/tutor-profile-form/tutor-profile-form.component';
import { FilterProfessorsComponent } from './components/filter-professors/filter-professors.component';
import { StudentProfilePageComponent } from './pages/student-profile-page/student-profile-page.component';
import { TutorClassesPageComponent } from './pages/tutor-classes-page/tutor-classes-page.component';
import { TutorStudentsPageComponent } from './pages/tutor-students-page/tutor-students-page.component';
import { TutorNotificationsPageComponent } from './pages/tutor-notifications-page/tutor-notifications-page.component';
import { TutorOpinionsPageComponent } from './pages/tutor-opinions-page/tutor-opinions-page.component';
import { StudentClassesPageComponent } from './pages/student-classes-page/student-classes-page.component';
import { StudentTutorsPageComponent } from './pages/student-tutors-page/student-tutors-page.component';
import { StudentNotificationsPageComponent } from './pages/student-notifications-page/student-notifications-page.component';
import { MapComponent } from './components/map/map.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { StudentMenuComponent } from './components/student-menu/student-menu.component';
import { TutorPersonalInfoComponent } from './components/tutor-personal-info/tutor-personal-info.component';
import { TableSubjectPriceComponent } from './components/table-subject-price/table-subject-price.component';
import { StudentPersonalInfoComponent } from './components/student-personal-info/student-personal-info.component';
import { StudentInfoPageComponent } from './pages/student-info-page/student-info-page.component';

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
    TutorMenuComponent,
    TutorProfilePageComponent,
    ProfileFormComponent,
    ProfilePictureComponent,
    TutorSubjectsComponent,
    TutorMyStudentsPageComponent,
    TutorMystudentCardComponent,
    TutorMySubjectsPageComponent,
    TutorMySubjectsCardComponent,
    StudentProfilePageComponent,
    StudentLearningComponent,
    StudentMyTeachersPageComponent,
    TutorProfileFormComponent,
    FilterProfessorsComponent,
    MapComponent,
    DetailPageComponent,
    StudentProfilePageComponent,
    TutorClassesPageComponent,
    TutorStudentsPageComponent,
    TutorNotificationsPageComponent,
    TutorOpinionsPageComponent,
    StudentClassesPageComponent,
    StudentTutorsPageComponent,
    StudentNotificationsPageComponent,
    MapComponent,
    HomePageComponent,
    StudentMenuComponent,
    TutorPersonalInfoComponent,
    TableSubjectPriceComponent,
    StudentPersonalInfoComponent,
    StudentInfoPageComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
    GoogleMapsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
