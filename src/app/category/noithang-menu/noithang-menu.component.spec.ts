import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoithangMenuComponent } from './noithang-menu.component';

describe('NoithangMenuComponent', () => {
  let component: NoithangMenuComponent;
  let fixture: ComponentFixture<NoithangMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoithangMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoithangMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
