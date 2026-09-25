import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VIDEOJUEGOS } from '../../mocks/Videojuegos';
import { VideojuegosTable } from './videojuegos-table';

describe('VideojuegosTable', () => {
  let component: VideojuegosTable;
  let fixture: ComponentFixture<VideojuegosTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideojuegosTable],
    }).compileComponents();

    fixture = TestBed.createComponent(VideojuegosTable);
    component = fixture.componentInstance;
    component.videojuegos = VIDEOJUEGOS;
    fixture.detectChanges();
  });

  it('deberia crearse', () => {
    expect(component).toBeTruthy();
  });

  it('deberia mostrar una fila por videojuego', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(VIDEOJUEGOS.length);
  });

  it('deberia mostrar los datos del primer videojuego', () => {
    const columns = fixture.debugElement.query(By.css('tbody tr')).queryAll(By.css('th, td'));
    const videojuego = VIDEOJUEGOS[0];

    expect(columns[0].nativeElement.textContent.trim()).toBe(String(videojuego.id));
    expect(columns[1].nativeElement.textContent.trim()).toBe(videojuego.nombre);
    expect(columns[2].nativeElement.textContent.trim()).toBe(videojuego.genero);
    expect(columns[3].nativeElement.textContent.trim()).toBe(videojuego.plataformas);
    expect(columns[4].nativeElement.textContent.trim()).toBe(String(videojuego.lanzamiento));
    expect(columns[5].nativeElement.textContent.trim()).toBe(videojuego.desarrollador);
  });
});