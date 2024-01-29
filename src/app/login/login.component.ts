import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  session: any;
  constructor(public authService:AuthService, private router:Router) {
    // let session = localStorage.getItem("token");
    // if (session) {
    //   this.session = session
    // }
  }

  userLogin(data:any){
    this.authService.getToken(data)
    this.router.navigate(['/dashboard', { }]);
  }
}
