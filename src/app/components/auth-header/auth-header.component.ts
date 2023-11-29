import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.css']
})
export class AuthHeaderComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }

  get linkText(): string {
    return this.router.url.includes("/registro") ? "Login" : "Registro";
  }
  
  get linkRoute(): string {
    return this.router.url.includes("/registro") ? "/login" : "/registro";
  }

}
