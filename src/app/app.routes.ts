import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { LoginComponent } from './login/login.component';

 export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        // redirectTo: '/users',
        pathMatch: 'full' 
    },
    {
        path: 'login',
        component: LoginComponent
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
