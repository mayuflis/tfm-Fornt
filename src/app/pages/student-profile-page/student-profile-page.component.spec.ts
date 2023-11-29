import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentProfilePageComponent } from './student-profile-page.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentProfilePageComponent } from './student-profile-page.component';
import { TutorProfileFormComponent } from 'src/app/components/tutor-profile-form/tutor-profile-form.component';

describe('StudentProfilePageComponent', () => {
  let component: StudentProfilePageComponent;
  let fixture: ComponentFixture<StudentProfilePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentProfilePageComponent]
=======
      declarations: [StudentProfilePageComponent, TutorProfileFormComponent] 
    });
    fixture = TestBed.createComponent(StudentProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
