import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanBuchannanComponent } from './dan-buchannan.component';

describe('DanBuchannanComponent', () => {
  let component: DanBuchannanComponent;
  let fixture: ComponentFixture<DanBuchannanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanBuchannanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanBuchannanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
