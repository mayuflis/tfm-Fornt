import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorPersonalInfoComponent } from './tutor-personal-info.component';

describe('TutorPersonalInfoComponent', () => {
  let component: TutorPersonalInfoComponent;
  let fixture: ComponentFixture<TutorPersonalInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorPersonalInfoComponent]
    });
    fixture = TestBed.createComponent(TutorPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
