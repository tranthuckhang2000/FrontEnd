import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TindocquyenMenuComponent } from './tindocquyen-menu.component';

describe('TindocquyenMenuComponent', () => {
  let component: TindocquyenMenuComponent;
  let fixture: ComponentFixture<TindocquyenMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TindocquyenMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TindocquyenMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
