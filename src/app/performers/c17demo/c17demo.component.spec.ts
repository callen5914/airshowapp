import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C17demoComponent } from './c17demo.component';

describe('C17demoComponent', () => {
  let component: C17demoComponent;
  let fixture: ComponentFixture<C17demoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C17demoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C17demoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
