import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorNewAdComponent } from './tutor-new-ad.component';

describe('TutorNewAdComponent', () => {
  let component: TutorNewAdComponent;
  let fixture: ComponentFixture<TutorNewAdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorNewAdComponent]
    });
    fixture = TestBed.createComponent(TutorNewAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
