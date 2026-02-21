import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';

TestBed.configureTestingModule({
  providers: [
    provideZonelessChangeDetection(),
    provideHttpClient(withFetch())
    // ... your other providers
  ]
});