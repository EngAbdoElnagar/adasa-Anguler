import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SechomeCategories } from './sechome-categories';

describe('SechomeCategories', () => {
  let component: SechomeCategories;
  let fixture: ComponentFixture<SechomeCategories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SechomeCategories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SechomeCategories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
