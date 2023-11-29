import { Component, Input, Output, EventEmitter } from '@angular/core';

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

}
