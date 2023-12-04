import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTutorFormComponent } from './contact-tutor-form.component';

describe('ContactTutorFormComponent', () => {
  let component: ContactTutorFormComponent;
  let fixture: ComponentFixture<ContactTutorFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactTutorFormComponent]
    });
    fixture = TestBed.createComponent(ContactTutorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
