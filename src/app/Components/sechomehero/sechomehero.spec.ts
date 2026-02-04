import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sechomehero } from './sechomehero';

describe('Sechomehero', () => {
  let component: Sechomehero;
  let fixture: ComponentFixture<Sechomehero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sechomehero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sechomehero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
