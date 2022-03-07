import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';
import { Drivers, DriversService } from './services/drivers.service';
import { GoogleMapsService } from './services/google-maps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  drivers: Drivers[] = [];
  isGoogleMapsApiLoaded: Observable<boolean>;
  googleMapsApiKey = environment.googleMapsApiKey;
  filterBy: string = '';
  lastHoveredDriverName: string = '';

  options: google.maps.MapOptions = {
    center: {lat: 41.852091, lng: -87.778973},
    zoom: 11,
    disableDefaultUI: true,
  };

  constructor(public driversService: DriversService, public googleMapsService: GoogleMapsService) {
    this.isGoogleMapsApiLoaded = this.googleMapsService.initGoogleMaps()
  }

  ngOnInit() {
    this.loadDrivers();
  }

  loadDrivers() {
    this.driversService.getDrivers().subscribe((data: Array<Drivers>) => {
      this.drivers = data;
    });
  }

  getMarkerOptions(driverName: string) {
    const opacity = driverName === this.lastHoveredDriverName ? 1 : 0.6;

    return {
      draggable: false,
      opacity,
    }
  }

  updateFilterByFromNavigation(filterBy: string) {
    this.filterBy = filterBy;
  }

  updateLastHoveredDriver(driverName: string) {
    this.lastHoveredDriverName = driverName;
  }


}
