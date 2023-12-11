import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorNotificationsPageComponent } from './tutor-notifications-page.component';

describe('TutorNotificationsPageComponent', () => {
  let component: TutorNotificationsPageComponent;
  let fixture: ComponentFixture<TutorNotificationsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorNotificationsPageComponent]
    });
    fixture = TestBed.createComponent(TutorNotificationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
