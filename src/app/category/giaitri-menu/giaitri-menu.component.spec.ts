import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaitriMenuComponent } from './giaitri-menu.component';

describe('GiaitriMenuComponent', () => {
  let component: GiaitriMenuComponent;
  let fixture: ComponentFixture<GiaitriMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiaitriMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiaitriMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
