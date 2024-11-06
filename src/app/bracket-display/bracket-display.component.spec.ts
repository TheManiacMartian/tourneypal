import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketDisplayComponent } from './bracket-display.component';

describe('BracketDisplayComponent', () => {
  let component: BracketDisplayComponent;
  let fixture: ComponentFixture<BracketDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BracketDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BracketDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
