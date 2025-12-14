import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalClearances } from './environmental-clearances';

describe('EnvironmentalClearances', () => {
  let component: EnvironmentalClearances;
  let fixture: ComponentFixture<EnvironmentalClearances>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvironmentalClearances]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvironmentalClearances);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
