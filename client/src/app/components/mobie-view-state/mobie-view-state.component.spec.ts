import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobieViewStateComponent } from './mobie-view-state.component';

describe('MobieViewStateComponent', () => {
  let component: MobieViewStateComponent;
  let fixture: ComponentFixture<MobieViewStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobieViewStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobieViewStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
