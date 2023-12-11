import { Component, OnInit, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  SubjectspricesService,
  itemToken,
} from 'src/app/services/subjectsprices.service';
import { jwtDecode } from 'jwt-decode';
import { asignaturas } from '../choose-class/choose-class.component';

type subject = {
  name: string;
  hourly_rate: number;
  level: string;
};
@Component({
  selector: 'app-table-subject-price',
  templateUrl: './table-subject-price.component.html',
  styleUrls: ['./table-subject-price.component.css'],
})
export class TableSubjectPriceComponent implements OnInit {
  private activateRoute = inject(ActivatedRoute);
  private subjectPriceService = inject(SubjectspricesService);
  data!: subject[];
  mostrarElemento: boolean = false;
  private token = localStorage.getItem('token');
  private decode: itemToken = jwtDecode(this.token!);
  idSesion: number = this.decode.user_id;
  asignaturas!:asignaturas[];

  async ngOnInit() {
    this.activateRoute.params.subscribe(async (params: any) => {
      //Para ver el listado de asignaturas des de la pagina de detalle.
      if (params.idTutor) {
        const idTutor = params.idTutor;
        try {
          this.data = await this.subjectPriceService.getPricesSubjects(idTutor);
      this.asignaturas = this.data.map((ele)=>{
      return ele
    
     ;
      
     }) ;
          
          console.log(this.asignaturas);
          const subjectTableBody =
            document.getElementById('subject-table-body');

          if (subjectTableBody !== null) {
            this.data.forEach((subject) => {
              const row = document.createElement('tr');
              row.innerHTML = `
                  <td>${subject.name}</td>
                  <td>${subject.level}</td>
                  <td>${subject.hourly_rate}€ / hora</td>
                  <td>+ 7€</td>
              
                  
                `;

              subjectTableBody.appendChild(row);
            });
          } else {
            console.error(
              "Elemento con ID 'subject-table-body' no encontrado."
            );
          }
        } catch (error) {
          console.log(error);
        }
      }
      //Para ver el listado de asignaturas desde el panel
      else {
        try {
          this.data = await this.subjectPriceService.getPricesSubjects(
            this.idSesion
          );
          this.asignaturas = this.data.map((ele)=>{
            return ele
          })
           ;
        
          console.log(this.data);

          const subjectTableBody =
            document.getElementById('subject-table-body');

          if (subjectTableBody !== null) {
            this.data.forEach((subject) => {
              const row = document.createElement('tr');
              row.innerHTML = `
                  <td>${subject.name}</td>
                  <td>${subject.level}</td>
                  <td>${subject.hourly_rate}€ / hora</td>
                  <td>+ 7€</td>
                   
                `;

              subjectTableBody.appendChild(row);
            });
          } else {
            console.error(
              "Elemento con ID 'subject-table-body' no encontrado."
            );
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  }

  toggleElement() {
    this.mostrarElemento = !this.mostrarElemento;
  }
}
