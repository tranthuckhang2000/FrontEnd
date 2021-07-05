import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaocMenuComponent } from './diaoc-menu.component';

describe('DiaocMenuComponent', () => {
  let component: DiaocMenuComponent;
  let fixture: ComponentFixture<DiaocMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaocMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaocMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
