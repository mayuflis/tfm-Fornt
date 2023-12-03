import { Component, inject, EventEmitter, Output, signal } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subjects } from '../../interfaces/WebPublic';
import { Provinces } from 'src/app/interfaces/auth';

import { FilterProfessorsService } from 'src/app/services/filter-professors.service';
import { TeachersWebPublic } from 'src/app/interfaces/WebPublic';
@Component({
  selector: 'app-filter-professors',
  templateUrl: './filter-professors.component.html',
  styleUrls: ['./filter-professors.component.css'],
})
export class FilterProfessorsComponent {
  private filterForm!: FormGroup;
  private filterSevice = inject(FilterProfessorsService);
  private fb = inject(FormBuilder);
  @Output() sendTeachers: EventEmitter<TeachersWebPublic>;
  private subjects: Subjects[] = [];
  private priceRange: number[] = [10, 15, 20, 25, 30, 35, 40, 45, 50];
  private experienceRange: number[] = [1, 2, 3, 4, 5];
  private provinces: Provinces[] = [];
  private teachers = signal<TeachersWebPublic>({
    name: '',
    last_name: '',
    image: '',
    description_prof: '',
    description_class: '',
    title_prof: '',
    hourly_rate: 0,
    free_classl: 0,
    level: 0,
    experience: 0,
    rate: 0,
    role: '',
    province_idprovince: 0,
    idsubjects: 0,
  });

  constructor() {
    this.filterForm = this.fb.group({
      selectedSubject: [0],
      selectedProvince: [0],
      selectedPrice: [0],
      selectedExperience: [0],
      minRating: [0],
    });
    this.sendTeachers = new EventEmitter();
  }

  getProvince(): Provinces[] {
    return this.provinces;
  }

  getSubjects(): Subjects[] {
    return this.subjects;
  }

  getPriceRange(): number[] {
    return this.priceRange;
  }
  getExperienceRange(): number[] {
    return this.experienceRange;
  }
  getFilterForm(): FormGroup {
    return this.filterForm;
  }
  async ngOnInit() {
    try {
      //Se obtienen ls asignaturas y las provincias desde la base de datos
      this.subjects = await this.filterSevice.getAllSubjects();
      this.provinces = await this.filterSevice.getAllProvinces();
    } catch (error) {
      console.error(error);
    }
  }

  async applyFilters() {
    //Se realiza el filtrado
    this.teachers.set(
      await this.filterSevice.getFilterTeachers(this.filterForm.value)
    );
    //Se pasa los valores filtrados al componente Home
    this.sendTeachers.emit(this.teachers());
  }
}
