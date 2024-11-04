import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourneySelectComponent } from './tourney-select.component';

describe('TourneySelectComponent', () => {
  let component: TourneySelectComponent;
  let fixture: ComponentFixture<TourneySelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourneySelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourneySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
