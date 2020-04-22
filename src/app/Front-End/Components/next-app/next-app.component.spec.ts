import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextAppComponent } from './next-app.component';

describe('NextAppComponent', () => {
  let component: NextAppComponent;
  let fixture: ComponentFixture<NextAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
