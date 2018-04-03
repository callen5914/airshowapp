import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GregSheltonAirComponent } from './greg-shelton-air.component';

describe('GregSheltonAirComponent', () => {
  let component: GregSheltonAirComponent;
  let fixture: ComponentFixture<GregSheltonAirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GregSheltonAirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GregSheltonAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
