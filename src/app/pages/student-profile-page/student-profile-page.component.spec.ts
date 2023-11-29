import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentProfilePageComponent } from './student-profile-page.component';
import { ProfileFormComponent } from 'src/app/components/profile-form/profile-form.component';

describe('StudentProfilePageComponent', () => {
  let component: StudentProfilePageComponent;
  let fixture: ComponentFixture<StudentProfilePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentProfilePageComponent, ProfileFormComponent] 
    });
    fixture = TestBed.createComponent(StudentProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
