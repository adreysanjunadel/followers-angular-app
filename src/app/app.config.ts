import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { GithubFollowersService } from './github-followers/github-followers.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from './app.config.types';
import { provideToastr } from 'ngx-toastr';

const getAppConfig = (): AppConfig => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const env = (import.meta as any).env?.VITE_APP_ENV;

  if (env === 'development') return DEV_CONFIG;
  if (env === 'staging') return STAGING_CONFIG;

  // Default fallback
  return PROD_CONFIG;
};

export const STAGING_CONFIG: AppConfig = {
  apiUrl: 'https://api.github.com/users/mosh-hamedani',
  production: false,
  navBarBackgroundColor: 'purple',
};

export const DEV_CONFIG: AppConfig = {
  apiUrl: 'https://api.github.com/users/mosh-hamedani',
  production: false,
  navBarBackgroundColor: 'lightgray',
};

export const PROD_CONFIG: AppConfig = {
  apiUrl: 'https://api.github.com/users/mosh-hamedani',
  production: true,
  navBarBackgroundColor: 'lime',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    GithubFollowersService,
    {
      provide: APP_CONFIG,
      useValue: getAppConfig(),
    },
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
};
