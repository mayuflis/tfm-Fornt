import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAboutMeProfileComponent } from './student-about-me-profile.component';

describe('StudentAboutMeProfileComponent', () => {
  let component: StudentAboutMeProfileComponent;
  let fixture: ComponentFixture<StudentAboutMeProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentAboutMeProfileComponent]
    });
    fixture = TestBed.createComponent(StudentAboutMeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
