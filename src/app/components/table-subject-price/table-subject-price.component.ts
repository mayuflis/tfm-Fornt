import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

  @Component({
    selector: 'app-table-subject-price',
    templateUrl: './table-subject-price.component.html',
    styleUrls: ['./table-subject-price.component.css']
  })
  export class TableSubjectPriceComponent implements OnInit {

    private activateRoute = inject(ActivatedRoute);

    ngOnInit() {
      
        this.activateRoute.params.subscribe((params: any) => {
          let teacherId = Number(params.idTutor)
          console.log(teacherId);  
          
        fetch(`http://localhost:3000/api/subjects/${teacherId}/subjects`)
          .then((response) => response.json())
          .then((data) => {
            const subjectTableBody = document.getElementById('subject-table-body');
          
            if (subjectTableBody !== null) {
              data.forEach((subject: { name: string; hourly_rate: number, level: string }) => {
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
              console.error("Elemento con ID 'subject-table-body' no encontrado.");
            }
          })
          .catch((error) => {
            console.error('Error al obtener los datos:', error);
          });

          
      }); 




  
      
    }
  }
  


