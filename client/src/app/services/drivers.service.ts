import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  
  // TODO: Add Driver type
  // TODO: Subscribe to Data change
  getDrivers(): Observable<any> {
    return this.http
      .get<any>(this.apiUrl + '/drivers')
      .pipe(retry(1), catchError(this.handleError));
  }

  // TODO: Show error message in UI component
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
