import { Token } from 'src/app/interfaces/token';
import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css'],
})
export class HomeHeaderComponent {
  @Input() nombre: string = 'nombre';
  @Output() inscribirmeClick: EventEmitter<void> = new EventEmitter<void>();
  private roleToken!: Token;
  private tokenService = inject(TokenService);
  private router = inject(Router);

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
  ngOnInit() {}

  getRoleToken() {
    this.roleToken = this.tokenService.getToken();
    if (this.roleToken !== undefined) {
      let count = 1 + 1; //TODO:Coloco un avariable porque hay un problema de sincronía
      return this.roleToken.user_role;
    }
    return;
  }
  removeToken() {
    localStorage.removeItem('token');
    window.location.href = 'login';
  }
}
