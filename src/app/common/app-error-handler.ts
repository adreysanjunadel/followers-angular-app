import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
  handleError(error: unknown) {
    alert('An unexpected error occurred.');
    console.log(error);
  }
}
