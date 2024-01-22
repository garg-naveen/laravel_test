import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

interface Comment {
	id: number;
	postId: number;
	name: string;
	body: string;
	email: string;
}

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
  comments:Comment[] = [];

	constructor(
    public userService:UserService,
    private route: ActivatedRoute,
    private location: Location,
    ) {}

	ngOnInit():void {
    const postId = Number(this.route.snapshot.paramMap.get('userId'));
		this.userService.findComments(postId).subscribe((data:Comment[]) => {
			this.comments = data
		})
	}

  goBack(): void {
    this.location.back();
  }
}
