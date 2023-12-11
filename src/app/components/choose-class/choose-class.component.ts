import { Token } from '../../interfaces/token';
import { Component, Input, inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import { ClassService, idSubject } from 'src/app/services/class.service';
import Swl from 'sweetalert2';
dayjs.extend(customParseFormat);
export type asignaturas = {
  name: string;
  hourly_rate: number;
  level: string;
};
@Component({
  selector: 'app-choose-class',
  templateUrl: './choose-class.component.html',
  styleUrls: ['./choose-class.component.css'],
})
export class ChooseClassComponent {
  @Input() class!: asignaturas[];
  private classService = inject(ClassService);
  private horaSumada!: string;
  private activedRoute = inject(ActivatedRoute);
  private Token: string = localStorage.getItem('token')!;
  private decoder: Token = jwtDecode(this.Token);
  private idUser!: number;
  private idTutor!: number;
  private mostrarElemento: boolean = false;
  miFormulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.miFormulario = this.formBuilder.group({
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      selectedAsignatura: ['', Validators.required],
      nivel: [''],
      idTutor: [''],
      idUser: [''],
      horaSumada: [''],
      idSubject: [''],
    });
  }
  ngOnInit() {
    this.activedRoute.params.subscribe((params: any) => {
      this.idTutor = params.idTutor;
      this.idUser = this.decoder.user_id;
    });
    console.log('El tutor es:', this.idTutor);
  }
  onAsignaturaChange(event: any) {
    const asignaturaSeleccionada = event.target.value;
    const nivelAsignatura = this.class.find(
      (asignatura) => asignatura.name === asignaturaSeleccionada
    )?.level;
    this.miFormulario.patchValue({ nivel: nivelAsignatura });
  }
  async submit() {
    dayjs.extend(customParseFormat);
    const momento = dayjs(this.miFormulario.value.hora, 'HH:mm');
    const findeclase = momento.add(1, 'hour');
    this.horaSumada = findeclase.format('HH:mm');
    const idSubject: idSubject[] = await this.classService.selectedIdSubject(
      this.miFormulario.value.selectedAsignatura
    );

    this.miFormulario.patchValue({
      idTutor: this.idTutor,
      idUser: this.idUser,
      horaSumada: this.horaSumada,
      idSubject: idSubject[0].idsubjects,
    });
    console.log(this.miFormulario.value);
    if (!this.miFormulario.valid) {
      //Todo:arreglar el formulario validacion
      console.log('entra');
      try {
        const result = await this.classService.insertClass(
          this.miFormulario.value
        );
        console.log(result);
        if (result) {
          this.miFormulario.reset();
          Swl.fire('Reserva realizada');
        }
      } catch (error) {}
    } else {
      console.log('Formulario inválido. Por favor, completa correctamente.');
    }
    this.toggleElement();
  }

  toggleElement() {
    this.mostrarElemento = !this.mostrarElemento;
  }
}
