import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Driver } from '../../services/drivers.service';

@Component({
  selector: 'driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss'],
})
export class DriverListComponent {
  @Input() drivers: any;
  @Input() filterBy: any;
  @Output() newUpdateHoveredDriverEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() newIsDriverDetailViewVisibileEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output("updateDriverLocation") updateDriverLocation: EventEmitter<string> = new EventEmitter<string>();

  showSortByMenu: boolean = false;
  isDriverDetailViewVisible: boolean = false;
  selectedSortByOption: string = '';
  selectedDriverForDetailView: Driver | null = null;

  constructor() { }

  setSelectedSortByOption(selectedOption: string) {
    this.selectedSortByOption = selectedOption;
    this.showSortByMenu = false;
  }

  updateLastHoveredDriver(driverName: string) {
    this.newUpdateHoveredDriverEvent.emit(driverName);
  }

  showDriverDetailView(driverToShow: any) {
    this.selectedDriverForDetailView = driverToShow;
    this.isDriverDetailViewVisible = true;
    this.newIsDriverDetailViewVisibileEvent.emit(true)
  }

  hideDriverDetailView() {
    this.isDriverDetailViewVisible = false;
    this.newIsDriverDetailViewVisibileEvent.emit(false)
  }

}
