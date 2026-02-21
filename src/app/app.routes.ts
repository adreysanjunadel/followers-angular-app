import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';

export const routes: Routes = [
    {
         path: '', 
         component: HomeComponent 
    },
    { 
        path: 'followers', 
        component: GithubFollowersComponent 
    }
];
