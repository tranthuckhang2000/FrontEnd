import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhapluatMenuComponent } from './phapluat-menu.component';

describe('PhapluatMenuComponent', () => {
  let component: PhapluatMenuComponent;
  let fixture: ComponentFixture<PhapluatMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhapluatMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhapluatMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
