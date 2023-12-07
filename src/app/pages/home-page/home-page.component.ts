import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeachersWebPublic } from 'src/app/interfaces/WebPublic';
import { TeacherCard } from 'src/app/interfaces/teacher-card.interface';
import { FilterProfessorsService } from 'src/app/services/filter-professors.service';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  activateRoute = inject(ActivatedRoute);
  //teachersService = inject(TeachersService);
  filterTeacherService = inject(FilterProfessorsService);
  teachers: TeacherCard[] = [];
  filterOfTeachers!: any;
  filterTeachers: any;
  nombre = 'nombre';
  pagination: number = 5;

  async ngOnInit(): Promise<void> {
    try {
      //this.getFilterTeachers;
      //this.teachers = await this.teachersService.getTeachersInfo()
      const savedFilters = localStorage.getItem('filterOfTeachers');
      if (savedFilters) {
        this.filterOfTeachers = JSON.parse(savedFilters);
      } else {
        this.filterOfTeachers = {
          selectedProvince: '',
          selectedSubject: '',
          selectedPrice: '0',
          selectedExperience: '0',
          minRating: '0',
        };
      }
      console.log(this.filterOfTeachers);
      this.teachers = await this.filterTeacherService.getFilterData(
        this.filterOfTeachers
      );

      localStorage.removeItem('filterOfTeachers');
      console.log(this.teachers);
    } catch (error) {
      console.error(error);
    }
  }
}
