import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgIf, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  session: any;
  isAuthenticated$;
  constructor(public authService:AuthService) {
    this.isAuthenticated$ = this.authService.isAuthentication;
  }

  ngOnInit(){}

  userLogout(){
    this.authService.logout();
  }
}
