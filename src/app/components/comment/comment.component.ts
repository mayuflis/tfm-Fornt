import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  gfg = true;//collapse write opinion
  rating: any;
  opinionTitle: string = '';
  opinionBody: string = '';


  ngOnInit(): void {
    this.rating = 0;
    this.opinionBody = '';
    this.opinionBody = '';
  }

  constructor(
    private http: HttpClient,
  ) { }

  submitForm(form: NgForm) {
    console.log("rating: " + this.rating);
    console.log("opinionTitle: " + this.opinionTitle);
    console.log("opinionBody: " + this.opinionBody);


    //this.http.post(`http://localhost:3000/api/registerpedido/`, {

    //}).subscribe(
      //data => {

     // },
     // error => {
     // }
   // )

    form.resetForm();
    this.rating = 0;
  }
}
