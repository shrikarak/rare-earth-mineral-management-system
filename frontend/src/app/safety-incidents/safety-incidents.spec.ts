import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyIncidents } from './safety-incidents';

describe('SafetyIncidents', () => {
  let component: SafetyIncidents;
  let fixture: ComponentFixture<SafetyIncidents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafetyIncidents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafetyIncidents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
