import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowCompComponent } from './control-flow-comp.component';

describe('ControlFlowCompComponent', () => {
  let component: ControlFlowCompComponent;
  let fixture: ComponentFixture<ControlFlowCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlFlowCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFlowCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
