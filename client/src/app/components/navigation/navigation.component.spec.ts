import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { FilterPipe } from '../../pipes/filter.pipe';
import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationComponent, FilterPipe ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the navigation bar', () => {
    const text = fixture.nativeElement.textContent

    expect(text).toContain('Github Repo')
  });

  it('should update the filter and send it to the parent component', () => {
    jest.spyOn(component.newFilterByEvent, 'emit');

    component.updateFilterBy('Nikki');

    expect(component.newFilterByEvent.emit).toHaveBeenCalledWith('Nikki');
  });

});
