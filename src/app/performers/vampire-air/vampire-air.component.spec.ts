import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VampireAirComponent } from './vampire-air.component';

describe('VampireAirComponent', () => {
  let component: VampireAirComponent;
  let fixture: ComponentFixture<VampireAirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VampireAirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VampireAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
