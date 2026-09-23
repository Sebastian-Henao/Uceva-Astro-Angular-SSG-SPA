import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelRivalsPage } from './marvel-rivals.page';

describe('MarvelRivalsPage', () => {
  let component: MarvelRivalsPage;
  let fixture: ComponentFixture<MarvelRivalsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarvelRivalsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarvelRivalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
