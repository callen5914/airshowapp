import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestinfoComponent } from './guestinfo.component';

describe('GuestinfoComponent', () => {
  let component: GuestinfoComponent;
  let fixture: ComponentFixture<GuestinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
