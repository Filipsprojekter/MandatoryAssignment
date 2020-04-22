import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsideComponent } from './teamside.component';

describe('TeamsideComponent', () => {
  let component: TeamsideComponent;
  let fixture: ComponentFixture<TeamsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
