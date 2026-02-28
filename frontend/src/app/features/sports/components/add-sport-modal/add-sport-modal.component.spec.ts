import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSportModalComponent } from './add-sport-modal.component';

describe('AddSportModalComponent', () => {
  let component: AddSportModalComponent;
  let fixture: ComponentFixture<AddSportModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSportModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSportModalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
