export interface AppConfig {
  apiUrl: string;
  production: boolean;
  navBarBackgroundColor: string;
}

// Create an InjectionToken
import { InjectionToken } from '@angular/core';
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
