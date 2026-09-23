import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelRivalsTableComponent } from './marvel-rivals-table.component';

describe('MarvelRivalsTableComponent', () => {
  let component: MarvelRivalsTableComponent;
  let fixture: ComponentFixture<MarvelRivalsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarvelRivalsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarvelRivalsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
