import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { VIDEOJUEGOS } from '../../mocks/Videojuegos';
import { VideojuegosTable } from '../../components/videojuegos-table/videojuegos-table';
import { VideojuegosService } from '../../services/videojuegos/videojuegos.service';
import { VideojuegosPage } from './videojuegos.page';

describe('VideojuegosPage', () => {
  let component: VideojuegosPage;
  let fixture: ComponentFixture<VideojuegosPage>;
  let service: VideojuegosService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideojuegosPage, VideojuegosTable],
    }).compileComponents();

    fixture = TestBed.createComponent(VideojuegosPage);
    component = fixture.componentInstance;
    service = TestBed.inject(VideojuegosService);
  });

  it('deberia crearse', () => {
    expect(component).toBeTruthy();
  });

  it('deberia cargar y pasar los videojuegos a la tabla', () => {
    jest.spyOn(service, 'getVideojuegos').mockReturnValue(of(VIDEOJUEGOS));
    fixture.detectChanges();

    const table = fixture.debugElement.query(By.directive(VideojuegosTable)).componentInstance;
    expect(component.videojuegos).toEqual(VIDEOJUEGOS);
    expect(table.videojuegos).toEqual(VIDEOJUEGOS);
  });

  it('deberia marcar el estado como error cuando falla el servicio', () => {
    const error = new Error('Error al cargar videojuegos');
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(service, 'getVideojuegos').mockReturnValue(throwError(() => error));
    fixture.detectChanges();

    expect(component.state).toBe('error');
    expect(console.error).toHaveBeenCalledWith(error);
  });
});