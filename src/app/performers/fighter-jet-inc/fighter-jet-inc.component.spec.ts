import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FighterJetIncComponent } from './fighter-jet-inc.component';

describe('FighterJetIncComponent', () => {
  let component: FighterJetIncComponent;
  let fixture: ComponentFixture<FighterJetIncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FighterJetIncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FighterJetIncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
