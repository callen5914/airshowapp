import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { performersComponent } from './performers.component';

describe('performersComponent', () => {
  let component: performersComponent;
  let fixture: ComponentFixture<performersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ performersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(performersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
