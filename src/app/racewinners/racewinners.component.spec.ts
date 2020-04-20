import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacewinnersComponent } from './racewinners.component';

describe('RacewinnersComponent', () => {
  let component: RacewinnersComponent;
  let fixture: ComponentFixture<RacewinnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacewinnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacewinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
