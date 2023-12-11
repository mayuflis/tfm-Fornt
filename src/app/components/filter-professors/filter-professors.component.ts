import { Component, inject, EventEmitter, Output, signal } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subjects } from '../../interfaces/WebPublic';
import { Provinces } from 'src/app/interfaces/auth';

import { FilterProfessorsService } from 'src/app/services/filter-professors.service';
import { TeachersWebPublic } from 'src/app/interfaces/WebPublic';
import { Router } from '@angular/router';
@Component({
  selector: 'app-filter-professors',
  templateUrl: './filter-professors.component.html',
  styleUrls: ['./filter-professors.component.css'],
})
export class FilterProfessorsComponent {
  private filterForm!: FormGroup;
  private filterSevice = inject(FilterProfessorsService);
  private fb = inject(FormBuilder);
  @Output() sendTeachers: EventEmitter<any>;
  private subjects: Subjects[] = [];
  private priceRange: number[] = [10, 15, 20, 25, 30, 35, 40, 45, 50];
  private experienceRange: number[] = [1, 2, 3, 4, 5];
  private provinces: Provinces[] = [];
  private router = inject(Router);

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
  
  async ngOnInit(): Promise<void> {
  try {
    this.subjects = await this.filterSevice.getAllSubjects();
    this.provinces = await this.filterSevice.getAllProvinces();

    const data = this.filterForm.value;
    this.sendTeachers.emit(data);

  } catch (error) {
    console.error(error);
  }
}
 
  //TODO: cambiar localstorage por algo más elaborado 
  async applyFilters() {
    localStorage.setItem('filterOfTeachers', JSON.stringify(this.filterForm.value));
    if (this.router.url === '/home') {
    window.location.reload();
  } else {
    this.router.navigate(['/home']);
  }
    
  }
  

}
