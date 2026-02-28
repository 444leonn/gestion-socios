import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SociosPage } from './socios.page';

describe('SociosPage', () => {
  let component: SociosPage;
  let fixture: ComponentFixture<SociosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SociosPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SociosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
