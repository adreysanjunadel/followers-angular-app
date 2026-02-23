import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { GithubFollower } from './github-followers.component';
import { APP_CONFIG } from '../app.config.types';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input';

@Injectable({
  providedIn: 'root',
})
export class GithubFollowersService {
  private readonly _url = 'https://api.github.com/users/mosh-hamedani/followers';

  private http = inject(HttpClient);
  private config = inject(APP_CONFIG);

  getFollowers() {
    console.log('Current API:', this.config.apiUrl);
    return this.http
      .get<GithubFollower[]>(`${this.config.apiUrl}/followers`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(() => new BadInputError());
    }

    if (error.status === 404) {
      return throwError(() => new NotFoundError());
    }

    return throwError(() => new AppError(error));
  }
}
