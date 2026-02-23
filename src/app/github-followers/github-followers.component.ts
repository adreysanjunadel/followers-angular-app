import { ActivatedRoute, RouterLink } from '@angular/router';
import { GithubFollowersService } from './github-followers.service';
import { signal, Component, inject, OnInit } from '@angular/core';
import { switchMap, combineLatest } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

export interface GithubFollower {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  // add other fields as needed
}
@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  standalone: true,
  imports: [RouterLink],
  styleUrls: ['./github-followers.component.css'],
})
export class GithubFollowersComponent implements OnInit {
  private toastr = inject(ToastrService);
  private route = inject(ActivatedRoute);
  private service = inject(GithubFollowersService);

  followers = signal<GithubFollower[]>([]);

  ngOnInit() {
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(
        switchMap((combined) => {
          const _id = combined[0].get('id');
          const _page = combined[1].get('page');

          return this.service.getFollowers();
        }),
      )
      .subscribe({
        next: (data) => this.followers.set(data),
        error: (_err) => this.toastr.error('Failed to load followers'),
      });
  }
}
