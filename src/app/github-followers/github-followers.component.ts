import { ActivatedRoute, RouterLink } from '@angular/router';
import { GithubFollowersService } from './github-followers.service';
import { Component, inject, OnInit } from '@angular/core';
import { switchMap, combineLatest } from 'rxjs'; 

export interface GithubFollower {
  id: number,
  login: string;
  avatar_url: string;
  html_url: string;
  // add other fields as needed
}
@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  standalone: true,
  imports: [RouterLink],
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers!: GithubFollower[];

  private route = inject(ActivatedRoute);
  private service = inject(GithubFollowersService);

  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(
      switchMap(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');

        return this.service.getFollowers();
      })
    )
    .subscribe(followers => this.followers = followers);
  }
}
