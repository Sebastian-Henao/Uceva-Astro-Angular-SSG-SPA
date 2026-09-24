import { Component, Input } from '@angular/core';
import { MarvelRivals, RolCategoria } from '../../interfaces/MarvelRivals.interface';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { CommonModule } from '@angular/common';

/**
 * Componente de tabla de personajes de Marvel Rivals.
 *
 * Se utiliza para mostrar un listado de personajes en una tabla,
 * incluyendo su información principal y un badge visual que identifica
 * el rol de cada personaje.
 *
 * @remarks
 * Este componente recibe los personajes desde un componente padre
 * a través del Input `marvelrivals` y utiliza el mapeo `categoryMap`
 * para asignar tipos de badge según el rol.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un organismo dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-marvel-rivals-table
 *   [marvelrivals]="Marvelrivals">
 * </app-marvel-rivals-table>
 * ```
 */
@Component({
  selector: 'app-marvel-rivals-table',
  imports: [CommonModule, BadgeAtom],
  templateUrl: './marvel-rivals-table.component.html',
})
export class MarvelRivalsTableComponent {
  /**
   * Listado de personajes de Marvel Rivals que se mostrarán en la tabla.
   *
   * @type {MarvelRivals[]}
   * @remarks
   * Este Input permite pasar un array de personajes desde un componente padre.
   * Cada personaje debe cumplir con la interfaz `MarvelRivals`.
   */
  @Input() marvelrivals: MarvelRivals[] = [];

  /**
   * Mapeo de roles de Marvel Rivals a tipos de Badge.
   *
   * @type {Record<RolCategoria, BadgeType>}
   * @remarks
   * Se utiliza para asignar un badge visual a cada rol:
   * - 'Vanguardia' -> 'primary'
   * - 'Duelista' -> 'danger'
   * - 'Estratega' -> 'info'
   * - 'Variable' -> 'warning'
   *
   * Esto permite identificar visualmente el rol de cada personaje
   * de forma consistente en la tabla.
   */
  categoryMap: Record<RolCategoria, BadgeType> = {
    'Vanguardia': 'primary',
    'Duelista': 'danger',
    'Estratega': 'info',
    'Variable': 'warning',
  }
}
