import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanngheMenuComponent } from './vannghe-menu.component';

describe('VanngheMenuComponent', () => {
  let component: VanngheMenuComponent;
  let fixture: ComponentFixture<VanngheMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VanngheMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VanngheMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
