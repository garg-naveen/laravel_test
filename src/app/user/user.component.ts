import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { RouterLink } from '@angular/router';

interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {};
	phone: string;
	website: string;
	company: {};  
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})

export class UserComponent {
	users:User[] = [];

	constructor(public userService:UserService) {}

	ngOnInit():void {
		this.userService.getUsers().subscribe((data:User[]) => {
			this.users = data
		})

		// fetch('http://127.0.0.1:8000/api/v1/users')
		// .then(
		// 	(res) => {return res.json()}
		// ).then((res) => {
		// 	this.users = res
		// })
	}

}
