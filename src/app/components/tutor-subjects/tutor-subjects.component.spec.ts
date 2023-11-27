import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorSubjectsComponent } from './tutor-subjects.component';

describe('TutorSubjectsComponent', () => {
  let component: TutorSubjectsComponent;
  let fixture: ComponentFixture<TutorSubjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorSubjectsComponent]
    });
    fixture = TestBed.createComponent(TutorSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
