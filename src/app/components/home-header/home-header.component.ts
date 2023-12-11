import { Token } from 'src/app/interfaces/token';
import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css'],
})
export class HomeHeaderComponent {
  @Input() nombre: string = 'nombre';
  @Output() inscribirmeClick: EventEmitter<void> = new EventEmitter<void>();
  private token = localStorage.getItem('token');
  private decode!: Token;
  role: string | undefined;
  mostrarPopup: boolean = false;
  opcionSeleccionada: string = '';

  inscribirme() {
    console.log('inscribirmeClick');
    this.inscribirmeClick.emit();
    this.mostrarPopup
      ? (this.mostrarPopup = false)
      : (this.mostrarPopup = true);
  }

  manejarOpcionSeleccionada(opcion: string): void {
    this.opcionSeleccionada = opcion;
    // Realiza la lógica necesaria según la opción seleccionada
    console.log('Opción seleccionada:', opcion);
    this.mostrarPopup = false;
  }
  ngOnInit() {
    if (this.token) {
      this.decode = jwtDecode(this.token!);
      this.role = this.decode.user_role;
    }
  }

  removeToken() {
    localStorage.removeItem('token');
    window.location.href = 'login';
  }
}
