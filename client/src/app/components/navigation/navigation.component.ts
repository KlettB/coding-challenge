import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Input() filterBy: any;
  @Output() newFilterByEvent = new EventEmitter<string>();
  
  constructor() {}

  updateFilterBy(arg: string) {
    this.newFilterByEvent.emit(arg);
  }

}
