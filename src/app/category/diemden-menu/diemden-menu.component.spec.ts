import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiemdenMenuComponent } from './diemden-menu.component';

describe('DiemdenMenuComponent', () => {
  let component: DiemdenMenuComponent;
  let fixture: ComponentFixture<DiemdenMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiemdenMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiemdenMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
