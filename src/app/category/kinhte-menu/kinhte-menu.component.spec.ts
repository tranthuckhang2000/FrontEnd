import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinhteMenuComponent } from './kinhte-menu.component';

describe('KinhteMenuComponent', () => {
  let component: KinhteMenuComponent;
  let fixture: ComponentFixture<KinhteMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinhteMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KinhteMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
