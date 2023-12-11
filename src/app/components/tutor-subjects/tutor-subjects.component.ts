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
  idSesion!: number; 
  updatedUserDone: boolean = false;
  updatedUserError: boolean = false;
  updatedUserRepeated: boolean = false;

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
    this.idSesion = decode.user_id;
    
    try {
      const allSubjects = await this.subjectsService.getAllSubjects()
      const tutor = await this.subjectsService.getPricesSubjects(this.idSesion)
      if (allSubjects === undefined || tutor === undefined) {
        alert('No se ha podido obtener los datos de las asignaturas')
      }
      else {
        this.arraySubjects = allSubjects
        this.tutorSubjects = tutor
      }
      
    } catch (error) {
      console.log(error)
    }
  }
  async sendData() {
  if (this.subjectForm.value.free_classl === '') {
    this.subjectForm.value.free_classl = 0;
  }

  const updateValue = this.subjectForm.value;

  // Verificar si la asignatura ya existe en el array tutorSubjects
  const isDuplicate = this.tutorSubjects.some((duplicated: any) => duplicated.name === updateValue.name);

  if (isDuplicate) {
    this.updatedUserRepeated = true;
  }
  else {
    // Si no es un duplicado, realizar la solicitud para añadir la asignatura
    const result = await this.subjectsService.postSubject(updateValue, this.idSesion);

    if (result) {
      location.reload();
      this.updatedUserDone = true;
    } else {
      this.updatedUserError = true;
    }
  }
}


  checkInput(formControlName: string, validator: string): boolean | undefined {
    return (
      this.subjectForm.get(formControlName)?.hasError(validator) &&
      this.subjectForm.get(formControlName)?.touched
    );
  }
}
