import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScottFrancisComponent } from './scott-francis.component';

describe('ScottFrancisComponent', () => {
  let component: ScottFrancisComponent;
  let fixture: ComponentFixture<ScottFrancisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScottFrancisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScottFrancisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
