import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';

 export const routes: Routes = [
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full' 
    },
    {
        path: 'users',
        component: UserComponent
    },
    {
        path: 'users/:userId/posts',
        component: PostsComponent
    },
    {
        path: 'users/:userId/comments',
        component: CommentsComponent
    }
];
