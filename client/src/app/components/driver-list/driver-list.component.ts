import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'driver-list',
  templateUrl: './driver-list.component.html',
})
export class DriverListComponent {
  @Input() drivers: any;
  @Input() filterBy: any;
  @Output() newUpdateHoveredDriverEvent = new EventEmitter<string>();

  showSortByMenu: boolean = false;
  selectedSortByOption: string = '';

  constructor() { }

  setSelectedSortByOption(selectedOption: string) {
    this.selectedSortByOption = selectedOption;
    this.showSortByMenu = false;
  }

  updateLastHoveredDriver(driverName: string) {
    this.newUpdateHoveredDriverEvent.emit(driverName);
  }

}
