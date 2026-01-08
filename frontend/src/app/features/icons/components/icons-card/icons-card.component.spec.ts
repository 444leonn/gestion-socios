import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsCardComponent } from './icons-card.component';

describe('IconsCardComponent', () => {
  let component: IconsCardComponent;
  let fixture: ComponentFixture<IconsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
