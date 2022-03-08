import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { of } from 'rxjs';
 
import { AppComponent } from './app.component';
import { DriverListComponent } from './components/driver-list/driver-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { DriversService } from './services/drivers.service';
import { GoogleMapsService } from './services/google-maps.service';

const driversMock = [
  {driverName: 'Alain Prost', driverGender: 'male', driverCityOrigin: 'Stuttgart', driverLanguage: 'de', driverPhone: '023782', driverInfo: 'Nice Dude', carMake: 'Volvo', kmDriven: '28392', location: {lat: 22.9403, lng: -23.2323}}, 
  {driverName: 'Nigel Mansell', driverGender: 'male', driverCityOrigin: 'Stuttgart', driverLanguage: 'de', driverPhone: '023782', driverInfo: 'Nice Dude', carMake: 'Volvo', kmDriven: '28392', location: {lat: 2.9403, lng: -23.2323}}
];

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let driverService: DriversService;
  let googleMapsService: GoogleMapsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DriverListComponent,
        NavigationComponent,
        FilterPipe, 
        SortPipe,
      ],
      imports: [
        GoogleMapsModule,
        HttpClientJsonpModule,
        HttpClientModule,
        FormsModule,
      ],
      providers: [
        DriversService,
        GoogleMapsService,
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    driverService = TestBed.inject(DriversService);
    googleMapsService = TestBed.inject(GoogleMapsService);
    jest.spyOn(driverService, 'getDrivers').mockReturnValue(of(driversMock));
    jest.spyOn(googleMapsService, 'initGoogleMaps').mockReturnValue(of(true));
    fixture.detectChanges();
  });
  
  it('should render the app and load drivers onInit', () => {
    const text = fixture.nativeElement.textContent;

    component.ngOnInit();

    expect(text).toContain('Github Repo');
    expect(text).toContain('Nigel Mansell');
    expect(text).toContain('Alain Prost');
  });

  it('should update the filter', () => {
    component.updateFilterByFromNavigation('Prost');

    expect(component.filterBy).toBe('Prost');
  });

  it('should update the last hovered driver', () => {
    component.updateLastHoveredDriver('Nigel');

    expect(component.lastHoveredDriverName).toBe('Nigel');
  });

  it('should update if driver detail view is shown', () => {
    component.updateIsDriverDetailViewVisible(true);

    expect(component.isDriverDetailViewVisible).toBe(true);
  });

  describe('getMarkerOptions', () => {

    it('should return default marker options if driver is not hovered', () => {
      const markerOptions = component.getMarkerOptions('Alain Prost');
  
      expect(markerOptions).toEqual({"draggable": false, "opacity": 0.6});
    });

    it('should return marker options with higher opacity if driver was last one hovered', () => {
      component.lastHoveredDriverName = 'Alain Prost';
      
      const markerOptions = component.getMarkerOptions('Alain Prost');
  
      expect(markerOptions).toEqual({"draggable": false, "opacity": 1})
    });

    it('should onle return single marker if detail view is shown', () => {
      component.lastHoveredDriverName = 'Alain Prost';
      component.isDriverDetailViewVisible = true
      
      const markerOptionsActive = component.getMarkerOptions('Alain Prost');
      const markerOptionsInActive = component.getMarkerOptions('Nigel Mansell');
  
      expect(markerOptionsActive).toEqual({"draggable": false, "opacity": 1})
      expect(markerOptionsInActive).toEqual({"draggable": false, "opacity": 0})
    });

  });
});
