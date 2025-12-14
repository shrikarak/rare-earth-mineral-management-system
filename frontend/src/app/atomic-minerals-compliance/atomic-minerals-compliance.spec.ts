import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicMineralsCompliance } from './atomic-minerals-compliance';

describe('AtomicMineralsCompliance', () => {
  let component: AtomicMineralsCompliance;
  let fixture: ComponentFixture<AtomicMineralsCompliance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomicMineralsCompliance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomicMineralsCompliance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
