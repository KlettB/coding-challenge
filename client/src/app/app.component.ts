import { Component, OnInit } from '@angular/core';

import { DriversService } from './services/drivers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  Drivers: any = [];

  constructor(public driversService: DriversService) {}

  ngOnInit() {
    this.loadDrivers();
  }

  loadDrivers() {
    this.driversService.getDrivers().subscribe((data: Array<any>) => {
      this.Drivers = data;
    });
  }

}
