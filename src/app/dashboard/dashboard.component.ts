import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  isAuthenticated$;
  constructor(public authService:AuthService) {
    this.isAuthenticated$ = this.authService.isAuthentication;
  }

}
