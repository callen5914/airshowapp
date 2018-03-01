import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreformersComponent } from './preformers.component';

describe('PreformersComponent', () => {
  let component: PreformersComponent;
  let fixture: ComponentFixture<PreformersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreformersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreformersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
