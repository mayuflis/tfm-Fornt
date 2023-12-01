import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorSubjectsNewComponent } from './tutor-subjects-new.component';

describe('TutorSubjectsNewComponent', () => {
  let component: TutorSubjectsNewComponent;
  let fixture: ComponentFixture<TutorSubjectsNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorSubjectsNewComponent]
    });
    fixture = TestBed.createComponent(TutorSubjectsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
