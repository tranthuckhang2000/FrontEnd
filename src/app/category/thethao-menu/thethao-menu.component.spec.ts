import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThethaoMenuComponent } from './thethao-menu.component';

describe('ThethaoMenuComponent', () => {
  let component: ThethaoMenuComponent;
  let fixture: ComponentFixture<ThethaoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThethaoMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThethaoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
