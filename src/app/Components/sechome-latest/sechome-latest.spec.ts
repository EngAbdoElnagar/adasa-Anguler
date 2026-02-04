import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SechomeLatest } from './sechome-latest';

describe('SechomeLatest', () => {
  let component: SechomeLatest;
  let fixture: ComponentFixture<SechomeLatest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SechomeLatest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SechomeLatest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
