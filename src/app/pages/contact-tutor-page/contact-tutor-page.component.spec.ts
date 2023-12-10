import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTutorPageComponent } from './contact-tutor-page.component';

describe('ContactTutorPageComponent', () => {
  let component: ContactTutorPageComponent;
  let fixture: ComponentFixture<ContactTutorPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactTutorPageComponent]
    });
    fixture = TestBed.createComponent(ContactTutorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
