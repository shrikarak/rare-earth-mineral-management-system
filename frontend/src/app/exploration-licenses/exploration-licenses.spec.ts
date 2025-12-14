import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorationLicenses } from './exploration-licenses';

describe('ExplorationLicenses', () => {
  let component: ExplorationLicenses;
  let fixture: ComponentFixture<ExplorationLicenses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplorationLicenses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorationLicenses);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
