import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelRivalsPage } from './marvel-rivals.page';
import { MarvelRivalsService } from '../../services/MarvelRivals/marvel-rivals.service';
import { MarvelRivalsTableComponent } from '../../components/MarvelRivals-table/marvel-rivals-table.component';
import { provideHttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { MARVEL_RIVALS_MOCK } from '../../mocks/MarvelRivals.mocks';
import { By } from '@angular/platform-browser';

describe('MarvelRivalsPage', () => {
  let component: MarvelRivalsPage;
  let fixture: ComponentFixture<MarvelRivalsPage>;
  let marvelRivalsService: MarvelRivalsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarvelRivalsPage, MarvelRivalsTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarvelRivalsPage);
    component = fixture.componentInstance;
    marvelRivalsService = TestBed.inject(MarvelRivalsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia llamar a getAllMarvelRivals al iniciar', () => {
    const spyGetAllMarvelRivals = jest.spyOn(marvelRivalsService, 'getAllMarvelRivals').mockReturnValue(of(MARVEL_RIVALS_MOCK));
    fixture.detectChanges();
    expect(spyGetAllMarvelRivals).toHaveBeenCalled();
  });

  it('deberia asignar los personajes recibidos del servicio', () => {
    jest.spyOn(marvelRivalsService, 'getAllMarvelRivals').mockReturnValue(of(MARVEL_RIVALS_MOCK));
    fixture.detectChanges();
    expect(component.Marvelrivals).toEqual(MARVEL_RIVALS_MOCK);
  });

  it('deberia pasar los personajes al componente marvel-rivals-table', () => {
    jest.spyOn(marvelRivalsService, 'getAllMarvelRivals').mockReturnValue(of(MARVEL_RIVALS_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(MarvelRivalsTableComponent))
      .componentInstance;
    expect(tableComponent.marvelrivals).toEqual(MARVEL_RIVALS_MOCK);
  });

  it('deberia manejar el error cuando falla getAllMarvelRivals', () => {
    component.Marvelrivals = [];
    const errorResponse = new Error('Error al cargar personajes');
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(marvelRivalsService, 'getAllMarvelRivals').mockReturnValue(throwError(() => errorResponse));
    fixture.detectChanges();
    expect(marvelRivalsService.getAllMarvelRivals).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.Marvelrivals.length).toBe(0);
  });
});
