import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskrouteComponent } from './taskroute.component';

describe('TaskrouteComponent', () => {
  let component: TaskrouteComponent;
  let fixture: ComponentFixture<TaskrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskrouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
