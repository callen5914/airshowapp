import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tora3Component } from './tora3.component';

describe('Tora3Component', () => {
  let component: Tora3Component;
  let fixture: ComponentFixture<Tora3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tora3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tora3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
