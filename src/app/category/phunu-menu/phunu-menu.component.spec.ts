import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhunuMenuComponent } from './phunu-menu.component';

describe('PhunuMenuComponent', () => {
  let component: PhunuMenuComponent;
  let fixture: ComponentFixture<PhunuMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhunuMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhunuMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
