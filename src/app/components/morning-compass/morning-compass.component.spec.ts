import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorningCompassComponent } from './morning-compass.component';

describe('MorningCompassComponent', () => {
  let component: MorningCompassComponent;
  let fixture: ComponentFixture<MorningCompassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorningCompassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorningCompassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
