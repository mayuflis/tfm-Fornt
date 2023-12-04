import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMyTutorsPageComponent } from './student-my-tutors-page.component';

describe('StudentMyTutorsPageComponent', () => {
  let component: StudentMyTutorsPageComponent;
  let fixture: ComponentFixture<StudentMyTutorsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentMyTutorsPageComponent]
    });
    fixture = TestBed.createComponent(StudentMyTutorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
