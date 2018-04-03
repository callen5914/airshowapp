import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrianCorrellComponent } from './brian-correll.component';

describe('BrianCorrellComponent', () => {
  let component: BrianCorrellComponent;
  let fixture: ComponentFixture<BrianCorrellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrianCorrellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrianCorrellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
