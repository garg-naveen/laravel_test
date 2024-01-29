import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(public authService:AuthService, private router:Router) {}

  userRegister(data:any){
    this.authService.regiter(data)

    this.router.navigate(['/login', { }]);
  }
}
