import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  session: any;
  constructor(public authService:AuthService, private router:Router) {
    // let session = localStorage.getItem("token");
    // if (session) {
    //   this.session = session
    // }
  }

  ngOnInit(){
    // this.LoginStatus$ = this.authService.getIsLoggedIn;
    console.log(this.authService.session, 'Naveen')
  }

  userLogout(){
    this.authService.logout();

    this.router.navigate(['login']);
  }
}
