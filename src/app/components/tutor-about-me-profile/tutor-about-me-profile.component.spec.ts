import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorAboutMeProfileComponent } from './tutor-about-me-profile.component';

describe('TutorAboutMeProfileComponent', () => {
  let component: TutorAboutMeProfileComponent;
  let fixture: ComponentFixture<TutorAboutMeProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorAboutMeProfileComponent]
    });
    fixture = TestBed.createComponent(TutorAboutMeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
