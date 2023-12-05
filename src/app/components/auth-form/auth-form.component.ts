import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Provinces } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth.service';
import Swa1 from 'sweetalert2';
@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
})
export class AuthFormComponent implements OnInit {
  authForm!: FormGroup;
  isTeacher: boolean = false;
  availableTags: string[] = ['Matemáticas', 'Física', 'Química']; // Ejemplo de tags disponibles. CAMBIAR --> Recibir de base de datos
  selectedTags: string[] = []; // Tags seleccionadas
  provinces!: Provinces[];
  private authService = inject(AuthService);
  private router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.authForm = this.fb.group(
      {
        nombre: ['', [Validators.required, Validators.minLength(2)]],
        apellidos: ['', [Validators.required, Validators.minLength(2)]],
        fechaNacimiento: ['', Validators.required],
        provincia: ['', Validators.required],
        telefono: [
          '',
          [
            Validators.required,
            Validators.pattern('^[0-9]+$'),
            Validators.minLength(9),
            Validators.maxLength(15),
          ],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
            ),
          ],
        ],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        rol: ['', Validators.required],
        longitude: [],
        latitude: [],
      },
      { validator: this.checkPasswords }
    );
  }
  async ngOnInit() {
    try {
      this.provinces = await this.authService.getAllProvinces();
    } catch (error: any) {
      console.log(error.fatal);
    }
  }

  checkPasswords(group: FormGroup) {
    const pass = group.get('password')?.value;
    const confirmPass = group.get('confirmPassword')?.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  async onSubmit() {
    try {
      this.obtenerUbicacion();
      if (this.authForm.valid) {
        const result = await this.authService.registerUser(this.authForm.value);
        if (result) {
          this.router.navigate(['/login']);
        }
      } else {
        this.mostrarAlert();
      }
    } catch (error: any) {
      if (
        error.error.fatal ===
        "Duplicate entry 'mayitavista@gmail.com' for key 'users.email_UNIQUE'"
      ) {
        Swa1.fire({
          title: 'Email duplicado',
          showClass: {
            popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
          },
          hideClass: {
            popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
          },
        });
      }
    }
  }
  obtenerUbicacion() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Obtener la longitud y latitud
          const longitud = position.coords.longitude;
          const latitud = position.coords.latitude;

          // Actualizar los valores en el formulario
          this.authForm.patchValue({
            longitude: longitud,
            latitude: latitud,
          });
        },
        (error) => {
          console.error('Error al obtener la ubicación:', error);
        }
      );
    } else {
      console.error('Geolocalización no es compatible en este navegador');
    }
  }

  mostrarAlert() {
    Swa1.fire({
      icon: 'error',
      title: 'Oops...',
      text: '¡Algo salió mal!',
      footer: 'El formulario posee campos incompletos',
    });
  }
}
