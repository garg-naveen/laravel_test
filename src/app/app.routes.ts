import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

 export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        title: 'Login',
        component: LoginComponent,
        canActivate: [guestGuard]
    },
    {
        path: 'dashboard',
        title: 'Dashboard',
        component: DashboardComponent,
        canActivate: [authGuard]
    },
    {
        path: 'register',
        title: 'Register',
        component: RegisterComponent,
        canActivate: [guestGuard]
    },
    {
        path: 'users',
        title: 'Users',
        component: UserComponent,
        canActivate: [authGuard]
    },
    {
        path: 'users/:userId/posts',
        title: 'posts',
        component: PostsComponent,
        canActivate: [authGuard]
    },
    {
        path: 'users/:userId/comments',
        title: 'Comments',
        component: CommentsComponent,
        canActivate: [authGuard]
    },
    {
      path: '**',
      title: '404 Not Found',
      component: PageNotFoundComponent
    }
];
