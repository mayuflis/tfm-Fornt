import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMytutorCardComponent } from './student-mytutor-card.component';

describe('StudentMytutorCardComponent', () => {
  let component: StudentMytutorCardComponent;
  let fixture: ComponentFixture<StudentMytutorCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentMytutorCardComponent]
    });
    fixture = TestBed.createComponent(StudentMytutorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
