import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { APP_CONFIG } from '../app.config.types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  protected config = inject(APP_CONFIG);

  backgroundColor = this.config.navBarBackgroundColor;
}
