import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialContributions } from './financial-contributions';

describe('FinancialContributions', () => {
  let component: FinancialContributions;
  let fixture: ComponentFixture<FinancialContributions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialContributions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialContributions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
