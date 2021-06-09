import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongdoanMenuComponent } from './congdoan-menu.component';

describe('CongdoanMenuComponent', () => {
  let component: CongdoanMenuComponent;
  let fixture: ComponentFixture<CongdoanMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongdoanMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongdoanMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
