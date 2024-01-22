import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

interface Post {
	id: number;
	userId: number;
	title: string;
	body: string;
}

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  posts:Post[] = [];

	constructor(
    public userService:UserService,
    private route: ActivatedRoute,
    private location: Location,
    ) {}

	ngOnInit():void {
    const id = Number(this.route.snapshot.paramMap.get('userId'));
		this.userService.findPosts(id).subscribe((data:Post[]) => {
			this.posts = data
		})
	}

  goBack(): void {
    this.location.back();
  }

}
