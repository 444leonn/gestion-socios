import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSocioModalComponent } from './add-socio-modal.component';

describe('AddSocioModalComponent', () => {
  let component: AddSocioModalComponent;
  let fixture: ComponentFixture<AddSocioModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSocioModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSocioModalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
