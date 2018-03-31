import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceMakerAirComponent } from './ace-maker-air.component';

describe('AceMakerAirComponent', () => {
  let component: AceMakerAirComponent;
  let fixture: ComponentFixture<AceMakerAirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceMakerAirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceMakerAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
