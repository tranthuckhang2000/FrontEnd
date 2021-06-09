import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaoducMenuComponent } from './giaoduc-menu.component';

describe('GiaoducMenuComponent', () => {
  let component: GiaoducMenuComponent;
  let fixture: ComponentFixture<GiaoducMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiaoducMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiaoducMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
