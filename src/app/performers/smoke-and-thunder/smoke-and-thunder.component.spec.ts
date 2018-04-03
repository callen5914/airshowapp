import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokeAndThunderComponent } from './smoke-and-thunder.component';

describe('SmokeAndThunderComponent', () => {
  let component: SmokeAndThunderComponent;
  let fixture: ComponentFixture<SmokeAndThunderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmokeAndThunderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmokeAndThunderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
