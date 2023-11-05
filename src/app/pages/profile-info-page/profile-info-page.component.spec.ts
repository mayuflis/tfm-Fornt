import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoPageComponent } from './profile-info-page.component';

describe('ProfileInfoPageComponent', () => {
  let component: ProfileInfoPageComponent;
  let fixture: ComponentFixture<ProfileInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileInfoPageComponent]
    });
    fixture = TestBed.createComponent(ProfileInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
