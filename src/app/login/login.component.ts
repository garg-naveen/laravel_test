import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(public userService:UserService) {}

  userLogin(data:any){
    this.userService.getToken(data)
  }
}
