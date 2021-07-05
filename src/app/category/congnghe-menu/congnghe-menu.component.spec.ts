import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongngheMenuComponent } from './congnghe-menu.component';

describe('CongngheMenuComponent', () => {
  let component: CongngheMenuComponent;
  let fixture: ComponentFixture<CongngheMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongngheMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongngheMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
