import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandocMenuComponent } from './bandoc-menu.component';

describe('BandocMenuComponent', () => {
  let component: BandocMenuComponent;
  let fixture: ComponentFixture<BandocMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandocMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandocMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
