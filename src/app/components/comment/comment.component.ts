import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { isEmpty } from 'rxjs';

type review = {
  id_reviews: number;
  title_opinion: string;
  opinions: string;
  recommendations: string;
  teachers_id_teachers: number;
  rate: number;
  users_idusers: number;
};

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent {
  gfg = true; //collapse write opinion
  rating: any;
  opinionTitle: string = '';
  opinionBody: string = '';
  isStudent: boolean = false;
  userId: any = null;
  tutorId: any = null;
  allCommentsFromTutor: any = null;
  userName: string = '';

  userAlreadyVotedOnThatTutor: boolean = false;
  responseReviewFromUserOfTutor: any;


  ngOnInit(): void {
    this.rating = 0;
    this.opinionTitle = '';
    this.opinionBody = '';

    const token = localStorage.getItem('token');

    if (token) {
      try {
        const [headerBase64, payloadBase64, signatureBase64] = token.split('.');

        // Decodificar la carga útil
        const payload = JSON.parse(atob(payloadBase64));

        // Extraer info de payload
        this.userId = parseInt(payload.user_id);

        this.isStudent = payload.user_role == "student" || payload.user_role == "Alumno";
        console.log("userId: ", this.userId)
        console.log("is a student logged?: ", this.isStudent)


      } catch (error) {
        console.error('Error al decodificar el token:', error);
      }
    } else {
      console.error('No se encontró el token en el localStorage.');
    }

    this.route.params.subscribe((params) => {
      const id = params['idTutor'];
      console.log('tutorId: ', id);
      this.tutorId = parseInt(id);
    });

    //Aqui se llama al back para traer todas las reviews de un determinado tutor

    this.http.get(`http://localhost:3000/api/reviews/selectallreviewsfromtutor/${this.tutorId}`).subscribe(
      data => {
        this.allCommentsFromTutor = data
        console.log("allCommentsFromTutor",data)
      },
      error => {
        console.log(error)
      }
    )

    //Aqui se llama al back para saber si el student o user puede crear otro comentario (mostrar o no boton)
    this.http.get(`http://localhost:3000/api/reviews/isThereAReviewFromUserOfTutor/${this.tutorId}/${this.userId}`).subscribe(
      data => {
        this.responseReviewFromUserOfTutor = data
        console.log(data)
      },
      error => {
        console.log(error)
      }
    )

  }

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  submitForm(form: NgForm) {
    console.log('rating: ' + this.rating);
    console.log('opinionTitle: ' + this.opinionTitle);
    console.log('opinionBody: ' + this.opinionBody);


    this.http.post(`http://localhost:3000/api/reviews/insertreview`, {
      "title_opinion": this.opinionTitle,
      "opinions": this.opinionBody,
      "recommendations": '',
      "teachers_id_teachers": this.tutorId,
      "rate": this.rating,
      "users_idusers": this.userId,
    }).subscribe(
      data => {
        console.log("success")
      },
      error => {
        console.error("wfsdfsdfsdfsdfsdfsd")
        console.log(error)
      }
    )


    form.resetForm();
    this.rating = 0;
    window.location.reload();
  }
}
