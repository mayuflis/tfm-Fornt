import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorProfileFormComponent } from './tutor-profile-form.component';

describe('TutorProfileFormComponent', () => {
  let component: TutorProfileFormComponent;
  let fixture: ComponentFixture<TutorProfileFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorProfileFormComponent]
    });
    fixture = TestBed.createComponent(TutorProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
