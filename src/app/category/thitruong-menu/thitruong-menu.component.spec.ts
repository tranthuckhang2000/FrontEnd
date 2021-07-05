import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThitruongMenuComponent } from './thitruong-menu.component';

describe('ThitruongMenuComponent', () => {
  let component: ThitruongMenuComponent;
  let fixture: ComponentFixture<ThitruongMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThitruongMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThitruongMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
