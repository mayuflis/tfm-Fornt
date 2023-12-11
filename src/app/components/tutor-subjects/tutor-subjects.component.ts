import { Component, inject } from '@angular/core';
import { SubjectspricesService } from 'src/app/services/subjectsprices.service';
import { jwtDecode } from 'jwt-decode';
import { itemToken } from 'src/app/services/subjectsprices.service';
import { subject } from 'src/app/services/subjectsprices.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-tutor-subjects',
  templateUrl: './tutor-subjects.component.html',
  styleUrls: ['./tutor-subjects.component.css']
})
export class TutorSubjectsComponent {
  subjectForm: FormGroup;
  private subjectsService = inject(SubjectspricesService)
  arraySubjects!: any; 
  tutorSubjects!: any;

  constructor() {
    this.subjectForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      level: new FormControl('', [Validators.required]),
      hourly_rate: new FormControl('', [Validators.required]),
      free_classl: new FormControl('', []) 
    })
  }

  async ngOnInit() {

    const token = localStorage.getItem('token');
    const decode: itemToken = jwtDecode(token!);
    const idSesion: number = decode.user_id;
    
    try {
      const allSubjects = await this.subjectsService.getAllSubjects()
      const tutor = await this.subjectsService.getPricesSubjects(idSesion)
      if (allSubjects === undefined || tutor === undefined) {
        alert('No se ha podido obtener los datos de las asignaturas')
      }
      else {
        this.arraySubjects = allSubjects
        console.log(this.arraySubjects)
        this.tutorSubjects = tutor
        console.log(this.tutorSubjects)
      }
      
    } catch (error) {
      console.log(error)
    }
  }
  sendData() {
    console.log(this.subjectForm.value)
  }
}
