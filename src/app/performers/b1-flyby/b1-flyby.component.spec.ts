import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B1FlybyComponent } from './b1-flyby.component';

describe('B1FlybyComponent', () => {
  let component: B1FlybyComponent;
  let fixture: ComponentFixture<B1FlybyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B1FlybyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B1FlybyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
