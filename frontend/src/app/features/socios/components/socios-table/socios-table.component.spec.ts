import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SociosTableComponent } from './socios-table.component';

describe('SociosTableComponent', () => {
  let component: SociosTableComponent;
  let fixture: ComponentFixture<SociosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SociosTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SociosTableComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
