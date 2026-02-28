import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsPage } from './sports.page';

describe('SportsPage', () => {
  let component: SportsPage;
  let fixture: ComponentFixture<SportsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
