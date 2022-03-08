import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverListComponent } from './driver-list.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { SortPipe } from '../../pipes/sort.pipe';

describe('DriverListComponent', () => {
  let component: DriverListComponent;
  let fixture: ComponentFixture<DriverListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverListComponent, FilterPipe, SortPipe ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverListComponent);
    component = fixture.componentInstance;
    component.drivers = [{driverName: 'Nikki Lauda'}, {driverName: 'Ayrton Senna'}]
    component.filterBy = ''
    fixture.detectChanges();
  });

  it('should render all given drivers', () => {
    const text = fixture.nativeElement.textContent

    expect(text).toContain('Drivers')
    expect(text).toContain('Nikki Lauda')
    expect(text).toContain('Ayrton Senna')
  });

  it('should render all filtered drivers', () => {
    const text = fixture.nativeElement.textContent
    component.filterBy = 'Nikki'

    fixture.detectChanges()

    expect(text).toContain('Drivers')
    expect(text).toContain('Nikki Lauda')
    expect(text).toContain('Ayrton Senna')
  });

  it('should sort drivers by name', () => {
    const text = fixture.nativeElement.textContent

    component.setSelectedSortByOption('driverName');
    fixture.detectChanges()

    expect(text).toContain('Ayrton Senna     km  Nikki Lauda')
  });

  it('should send last hovered driver name to parent component', () => {
    jest.spyOn(component.newUpdateHoveredDriverEvent, 'emit');

    component.updateLastHoveredDriver('Nikki');

    expect(component.newUpdateHoveredDriverEvent.emit).toHaveBeenCalledWith('Nikki');
  });

  it('should show detail view and update parent component', () => {
    jest.spyOn(component.newIsDriverDetailViewVisibileEvent, 'emit');

    component.showDriverDetailView('Nikki Lauda');

    expect(component.newIsDriverDetailViewVisibileEvent.emit).toHaveBeenCalledWith(true);
  });

  it('should hide detail view and update parent component', () => {
    jest.spyOn(component.newIsDriverDetailViewVisibileEvent, 'emit');

    component.hideDriverDetailView();

    expect(component.newIsDriverDetailViewVisibileEvent.emit).toHaveBeenCalledWith(false);
  });

});
