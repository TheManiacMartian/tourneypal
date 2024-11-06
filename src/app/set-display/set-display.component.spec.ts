import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDisplayComponent } from './set-display.component';

describe('SetDisplayComponent', () => {
  let component: SetDisplayComponent;
  let fixture: ComponentFixture<SetDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
