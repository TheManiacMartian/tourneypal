import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSelectModule } from '@angular/material/select'
import { MatFormField } from '@angular/material/form-field'
import { UserService } from '../user.service';

import { TourneyManager } from '../tourney-manager';

import { PhaseSelectComponent } from './phase-select.component';

describe('PhaseSelectComponent', () => {
  let component: PhaseSelectComponent;
  let fixture: ComponentFixture<PhaseSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhaseSelectComponent, MatFormField, MatSelectModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhaseSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
