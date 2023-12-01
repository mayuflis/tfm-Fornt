import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorStarsComponent } from './tutor-stars.component';

describe('TutorStarsComponent', () => {
  let component: TutorStarsComponent;
  let fixture: ComponentFixture<TutorStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorStarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
