import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsClassesCardComponent } from './students-classes-card.component';

describe('StudentsClassesCardComponent', () => {
  let component: StudentsClassesCardComponent;
  let fixture: ComponentFixture<StudentsClassesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsClassesCardComponent]
    });
    fixture = TestBed.createComponent(StudentsClassesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
