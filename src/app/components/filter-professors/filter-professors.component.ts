import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-filter-professors',
  templateUrl: './filter-professors.component.html',
  styleUrls: ['./filter-professors.component.css'],
})
export class FilterProfessorsComponent {
  subjects: string[] = [
    'Matemáticas',
    'Literatura',
    'Historia',
    'Biología',
    'Física',
    'Química',
    'Geografía',
    'Informática',
    'Educación Física',
    'Inglés',
    'Francés',
    'Alemán',
    'Filosofía',
    'Economía',
    'Arte',
    'Música',
    'Sociología',
    'Psicología',
    'Ciencias políticas',
    'Educación Cívica',
    'Tecnología',
    'Ecología y medio ambiente',
  ];
  priceRange: number[] = [10, 15, 20, 25, 30, 35, 40, 45, 50];
  experienceRange: number[] = [1, 2, 3, 4, 5];
  minRating: number = 0;
  provinces: string[] = [
    'Álava',
    'Albacete',
    'Alicante',
    'Almería',
    'Asturias',
    'Ávila',
    'Badajoz',
    'Barcelona',
    'Burgos',
    'Cáceres',
    'Cádiz',
    'Cantabria',
    'Castellón',
    'Ciudad Real',
    'Córdoba',
    'Cuenca',
    'Gerona',
    'Granada',
    'Guadalajara',
    'Guipúzcoa',
    'Huelva',
    'Huesca',
    'Islas Baleares',
    'Jaén',
    'La Coruña',
    'La Rioja',
    'Las Palmas',
    'León',
    'Lérida',
    'Lugo',
    'Madrid',
    'Málaga',
    'Murcia',
    'Navarra',
    'Orense',
    'Palencia',
    'Pontevedra',
    'Salamanca',
    'Segovia',
    'Sevilla',
    'Soria',
    'Tarragona',
    'Santa Cruz de Tenerife',
    'Teruel',
    'Toledo',
    'Valencia',
    'Valladolid',
    'Vizcaya',
    'Zamora',
    'Zaragoza',
  ];
  selectedSubject: string = '';
  selectedProvince: string = '';
  selectedPrice: number = 0;
  selectedExperience: number = 0;

  applyFilters(): void {
    //Filtros
    console.log('Asignatura:', this.selectedSubject);
    console.log('Precio:', this.selectedPrice);
    console.log('Experiencia:', this.selectedExperience);
    console.log('Puntuación mínima:', this.minRating);
    console.log('Provincia:', this.selectedProvince);
  }
}
