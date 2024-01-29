import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';

 export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [guestGuard]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [guestGuard]
    },
    {
        path: 'users',
        component: UserComponent,
        canActivate: [authGuard]
    },
    {
        path: 'users/:userId/posts',
        component: PostsComponent,
        canActivate: [authGuard]
    },
    {
        path: 'users/:userId/comments',
        component: CommentsComponent,
        canActivate: [authGuard]
    },
    {
      path: '**',
      component: LoginComponent
    }
];
