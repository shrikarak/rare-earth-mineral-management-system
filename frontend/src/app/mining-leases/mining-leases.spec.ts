import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningLeases } from './mining-leases';

describe('MiningLeases', () => {
  let component: MiningLeases;
  let fixture: ComponentFixture<MiningLeases>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiningLeases]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiningLeases);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
