import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerHttpServiceComponent } from './winner-http-service.component';

describe('WinnerHttpServiceComponent', () => {
  let component: WinnerHttpServiceComponent;
  let fixture: ComponentFixture<WinnerHttpServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinnerHttpServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerHttpServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
