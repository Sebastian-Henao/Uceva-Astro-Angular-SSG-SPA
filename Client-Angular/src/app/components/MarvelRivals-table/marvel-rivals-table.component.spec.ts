import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelRivalsTableComponent } from './marvel-rivals-table.component';
import { By } from '@angular/platform-browser';
import { MARVEL_RIVALS_MOCK } from '../../mocks/MarvelRivals.mocks';

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

  it('deberia renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('deberia renderizar una fila por cada personaje', () => {
    component.marvelrivals = MARVEL_RIVALS_MOCK;
    fixture.detectChanges();
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.marvelrivals.length);
  });

  it('deberia mostrar los datos del personaje en cada columna', () => {
    component.marvelrivals = MARVEL_RIVALS_MOCK;
    fixture.detectChanges();
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const personaje = component.marvelrivals[index];
      expect(columns[0].nativeElement.textContent.trim()).toBe(String(personaje.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(personaje.nombre);
      expect(columns[2].nativeElement.textContent.trim()).toBe(personaje.alias);
      expect(columns[3].nativeElement.textContent.trim()).toBe(personaje.equipo);
      expect(columns[4].nativeElement.textContent.trim()).toBe(personaje.habilidad);
      expect(columns[5].nativeElement.textContent.trim()).toBe(personaje.rol);
    });
  });

  it('deberia mapear capa rol a su BadgeType correcto', () => {
    expect(component.categoryMap['Vanguardia']).toBe('primary');
    expect(component.categoryMap['Duelista']).toBe('danger');
    expect(component.categoryMap['Estratega']).toBe('info');
    expect(component.categoryMap['Variable']).toBe('warning');
  });
});
