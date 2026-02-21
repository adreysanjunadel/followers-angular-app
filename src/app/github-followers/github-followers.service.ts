import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { GithubFollower } from './github-followers.component';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService {
  private readonly _url = 'https://api.github.com/users/mosh-hamedani/followers';

  private http = inject(HttpClient);

  getFollowers() { 
    return this.http.get<GithubFollower[]>(this._url);
  }
}
