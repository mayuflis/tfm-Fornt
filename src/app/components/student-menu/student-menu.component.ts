/*import { Component } from '@angular/core';

@Component({
  selector: 'app-student-menu',
  templateUrl: './student-menu.component.html',
  styleUrls: ['./student-menu.component.css']
})
export class StudentMenuComponent {

}
*/

import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-menu',
  templateUrl: './student-menu.component.html',
  styleUrls: ['./student-menu.component.css']
})
export class StudentMenuComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  goToStudentInfo() {
    this.route.paramMap.subscribe(params => {
      const idStudent = params.get('idStudent');
      if (idStudent) {
        this.router.navigate(['/student-info', idStudent]);
      }
    });
  }
  goToStudentProfile() {
    this.route.paramMap.subscribe(params => {
      const idStudent = params.get('idStudent');
      if (idStudent) {
        this.router.navigate(['/student-profile', idStudent]);
      }
    });
  }
  goToStudentClasses() {
    this.route.paramMap.subscribe(params => {
      const idStudent = params.get('idStudent');
      if (idStudent) {
        this.router.navigate(['/student-classes', idStudent]);
      }
    });
  }
  goToStudentTutors() {
    this.route.paramMap.subscribe(params => {
      const idStudent = params.get('idStudent');
      if (idStudent) {
        this.router.navigate(['/student-tutors', idStudent]);
      }
    });
  }
  goToStudentNotifications() {
    this.route.paramMap.subscribe(params => {
      const idStudent = params.get('idStudent');
      if (idStudent) {
        this.router.navigate(['/student-notifications', idStudent]);
      }
    });
  
  }
}
