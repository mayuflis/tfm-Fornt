import { Component, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherCard } from 'src/app/interfaces/teacher-card.interface';

@Component({
  selector: 'app-tutor-card',
  templateUrl: './tutor-card.component.html',
  styleUrls: ['./tutor-card.component.css']
})
export class TutorCardComponent {
  @Input() teacher: TeacherCard | any;
  @Input() showContactButton: boolean = true;
  @Input() showEmail: boolean = true;
  @Input() showSimpleTags: boolean = true;
  @Input() showDetailedTags: boolean = true;
  @Input() showAge: boolean = true;
  
  token = localStorage.getItem('token');
  router = inject(Router)

  ngOnInit() {
  }
  checkToken() {
    if (!this.token) {
      this.router.navigate(['/login'])
      alert('Tienes que iniciar sesión.')
    }
  }
}
