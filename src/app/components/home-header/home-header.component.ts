import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent {
  @Input() nombre: string = 'nombre';
  @Output() inscribirmeClick: EventEmitter<void> = new EventEmitter<void>();
  mostrarPopup: boolean = false;
  opcionSeleccionada: string = '';

  inscribirme() {
    console.log('inscribirmeClick')
    this.inscribirmeClick.emit();
    this.mostrarPopup ? this.mostrarPopup = false : this.mostrarPopup = true;
  }

  manejarOpcionSeleccionada(opcion: string): void {
    this.opcionSeleccionada = opcion;
    // Realiza la lógica necesaria según la opción seleccionada
    console.log('Opción seleccionada:', opcion);
    this.mostrarPopup = false;
  }

constructor(private router: Router, private route: ActivatedRoute) {}
goToTutorInfo() {
    this.route.paramMap.subscribe((params) => {
      const idTutor = params.get('idTutor');
      if (idTutor) {
        this.router.navigate(['/tutor-info', idTutor]);
      }
    });
  }
  goToTutorProfile() {
    this.route.paramMap.subscribe((params) => {
      const idTutor = params.get('idTutor');
      if (idTutor) {
        this.router.navigate(['/tutor-profile', idTutor]);
      }
    });
  }
  goToTutorClasses() {
    this.route.paramMap.subscribe((params) => {
      const idTutor = params.get('idTutor');
      if (idTutor) {
        this.router.navigate(['/tutor-classes', idTutor]);
      }
    });
  }
  goToTutorStudents() {
    this.route.paramMap.subscribe((params) => {
      const idTutor = params.get('idTutor');
      if (idTutor) {
        this.router.navigate(['/tutor-students', idTutor]);
      }
    });
  }
  goToTutorNotifications() {
    this.route.paramMap.subscribe((params) => {
      const idTutor = params.get('idTutor');
      if (idTutor) {
        this.router.navigate(['/tutor', idTutor, 'notifications']);
      }
    });
  }
  goToTutorOpinions() {
    this.route.paramMap.subscribe((params) => {
      const idTutor = params.get('idTutor');
      if (idTutor) {
        this.router.navigate(['/tutor-opinions', idTutor]);
      }
    });
  }



}
