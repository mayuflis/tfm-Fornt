import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNotificationsPageComponent } from './student-notifications-page.component';

describe('StudentNotificationsPageComponent', () => {
  let component: StudentNotificationsPageComponent;
  let fixture: ComponentFixture<StudentNotificationsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentNotificationsPageComponent]
    });
    fixture = TestBed.createComponent(StudentNotificationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
