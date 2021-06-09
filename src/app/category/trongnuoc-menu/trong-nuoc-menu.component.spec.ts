import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrongNuocMenuComponent } from './trong-nuoc-menu.component';

describe('TrongNuocMenuComponent', () => {
  let component: TrongNuocMenuComponent;
  let fixture: ComponentFixture<TrongNuocMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrongNuocMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrongNuocMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
