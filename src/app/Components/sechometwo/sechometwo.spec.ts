import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sechometwo } from './sechometwo';

describe('Sechometwo', () => {
  let component: Sechometwo;
  let fixture: ComponentFixture<Sechometwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sechometwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sechometwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
