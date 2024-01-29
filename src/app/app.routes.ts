import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

 export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'register',
        component: RegisterComponent
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
    },
    {
      path: '**',
      component: LoginComponent
    }
];
