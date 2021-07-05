import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LytuongsongMenuComponent } from './lytuongsong-menu.component';

describe('LytuongsongMenuComponent', () => {
  let component: LytuongsongMenuComponent;
  let fixture: ComponentFixture<LytuongsongMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LytuongsongMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LytuongsongMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
