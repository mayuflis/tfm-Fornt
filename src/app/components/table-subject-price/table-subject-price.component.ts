import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectspricesService } from 'src/app/services/subjectsprices.service';

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
  async ngOnInit() {
    this.data = await this.subjectPriceService.GetPricesSubjects();

    const subjectTableBody = document.getElementById('subject-table-body');

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
      console.error("Elemento con ID 'subject-table-body' no encontrado.");
    }
  }
}
