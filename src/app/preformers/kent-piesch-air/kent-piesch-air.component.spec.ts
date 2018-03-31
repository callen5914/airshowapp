import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KentPieschAirComponent } from './kent-piesch-air.component';

describe('KentPieschAirComponent', () => {
  let component: KentPieschAirComponent;
  let fixture: ComponentFixture<KentPieschAirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KentPieschAirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KentPieschAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
