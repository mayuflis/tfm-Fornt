import { Component, inject } from '@angular/core';
import { infoClass } from 'src/app/pages/student-classes-page/student-classes-page.component';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students-classes-card',
  templateUrl: './students-classes-card.component.html',
  styleUrls: ['./students-classes-card.component.css'],
})
export class StudentsClassesCardComponent {
  private teachersService = inject(StudentsService);
  private info!: infoClass[];
  async ngOnInit() {
    try {
      //Recibe la información de las clases que imparte el almuno
      this.info = await this.teachersService.getInfoClass();
    } catch (error) {
      console.error(error);
    }
  }

  getInfo(): infoClass[] {
    return this.info;
  }
}
