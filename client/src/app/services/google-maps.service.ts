import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  googleMapsApiKey = environment.googleMapsApiKey;

  constructor(private http: HttpClient) {}

  initGoogleMaps(): Observable<any> {
    return this.http
      .jsonp('https://maps.googleapis.com/maps/api/js?key=' + this.googleMapsApiKey, 'callback')
      .pipe(map(() => true), catchError(() => of(false)),);
  }
  
}
