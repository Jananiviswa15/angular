import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frontend1Component } from './frontend1.component';

describe('Frontend1Component', () => {
  let component: Frontend1Component;
  let fixture: ComponentFixture<Frontend1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frontend1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frontend1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
