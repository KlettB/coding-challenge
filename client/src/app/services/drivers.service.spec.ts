import {of} from 'rxjs'
import {createSpyObj} from 'jest-createspyobj'

import { DriversService } from './drivers.service';

describe('DriverService', () => {

  it('should return driver data', done => {
    const mockResponse = [{driverName: 'Dominic Toretto'}, {driverName: 'Brian O´Connor'}]
    const httpClientSpy = createSpyObj('HttpClient', ['get'])
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(mockResponse));
    const driverService = new DriversService(httpClientSpy as any);

    driverService.getDrivers().subscribe(response => {
      expect(response).toEqual(mockResponse);
      done();
    }, error => done.fail(error));
  });

});