import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSelectComponent } from './event-select.component';

describe('EventSelectComponent', () => {
  let component: EventSelectComponent;
  let fixture: ComponentFixture<EventSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
