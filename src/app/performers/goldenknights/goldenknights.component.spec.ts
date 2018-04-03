import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenknightsComponent } from './goldenknights.component';

describe('GoldenknightsComponent', () => {
  let component: GoldenknightsComponent;
  let fixture: ComponentFixture<GoldenknightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldenknightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldenknightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
