import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorOpinionsPageComponent } from './tutor-opinions-page.component';

describe('TutorOpinionsPageComponent', () => {
  let component: TutorOpinionsPageComponent;
  let fixture: ComponentFixture<TutorOpinionsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorOpinionsPageComponent]
    });
    fixture = TestBed.createComponent(TutorOpinionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
