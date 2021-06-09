import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuckhoeMenuComponent } from './suckhoe-menu.component';

describe('SuckhoeMenuComponent', () => {
  let component: SuckhoeMenuComponent;
  let fixture: ComponentFixture<SuckhoeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuckhoeMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuckhoeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
