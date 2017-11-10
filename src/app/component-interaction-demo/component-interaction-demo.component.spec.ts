import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInteractionDemoComponent } from './component-interaction-demo.component';

describe('ComponentInteractionDemoComponent', () => {
  let component: ComponentInteractionDemoComponent;
  let fixture: ComponentFixture<ComponentInteractionDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentInteractionDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInteractionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
