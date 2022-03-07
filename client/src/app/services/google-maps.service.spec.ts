import { TestBed } from '@angular/core/testing';
import { createSpyObj } from 'jest-createspyobj';
import { of, throwError } from 'rxjs';

import { GoogleMapsService } from './google-maps.service';

describe('GoogleMapsService', () => {

  it('should return true after succesfull init', done => {
    const httpClientSpy = createSpyObj('HttpClient', ['jsonp'])
    jest.spyOn(httpClientSpy, 'jsonp').mockReturnValue(of(true));
    const googleMapsService = new GoogleMapsService(httpClientSpy as any);

    googleMapsService.initGoogleMaps().subscribe(response => {
      expect(response).toEqual(true);
      done();
    }, error => done.fail(error));
  });

  it('should return false if init fails', done => {
    const httpClientSpy = createSpyObj('HttpClient', ['jsonp'])
    jest.spyOn(httpClientSpy, 'jsonp').mockReturnValue(throwError({status: 404, message: 'Some error'}));
    const googleMapsService = new GoogleMapsService(httpClientSpy as any);

    googleMapsService.initGoogleMaps().subscribe(response => {
      expect(response).toEqual(false);
      done();
    }, error => done.fail(error));
  });

});
