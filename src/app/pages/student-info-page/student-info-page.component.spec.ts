import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInfoPageComponent } from './student-info-page.component';

describe('StudentInfoPageComponent', () => {
  let component: StudentInfoPageComponent;
  let fixture: ComponentFixture<StudentInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentInfoPageComponent]
    });
    fixture = TestBed.createComponent(StudentInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
