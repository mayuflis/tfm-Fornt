
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutor-menu',
  templateUrl: './tutor-menu.component.html',
  styleUrls: ['./tutor-menu.component.css']
})
export class TutorMenuComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  goToTutorInfo() {
    this.route.paramMap.subscribe(params => {
      const idTutor = params.get('idTutor');
      if (idTutor) {
        this.router.navigate(['/tutor-info', idTutor]);
      }
    });
  }
  goToTutorProfile() {
    this.route.paramMap.subscribe(params => {
      const idTutor = params.get('idTutor');
      if (idTutor) {
        this.router.navigate(['/tutor-profile', idTutor]);
      }
    });
  }
  goToTutorClasses() {
    this.route.paramMap.subscribe(params => {
      const idTutor = params.get('idTutor');
      if (idTutor) {
        this.router.navigate(['/tutor-classes', idTutor]);
      }
    });
  }
  goToTutorStudents() {
    this.route.paramMap.subscribe(params => {
      const idTutor = params.get('idTutor');
      if (idTutor) {
        this.router.navigate(['/tutor-students', idTutor]);
      }
    });
  }
  goToTutorNotifications() {
    this.route.paramMap.subscribe(params => {
      const idTutor = params.get('idTutor');
      if (idTutor) {
        this.router.navigate(['/tutor-notifications', idTutor]);
      }
    });
  }
    goToTutorOpinions() {
      this.route.paramMap.subscribe(params => {
        const idTutor = params.get('idTutor');
        if (idTutor) {
          this.router.navigate(['/tutor-opinions', idTutor]);
        }
      });
  }
}
