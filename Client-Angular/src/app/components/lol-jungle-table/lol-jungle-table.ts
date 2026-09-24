import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { JungleChampion } from '../../interfaces/JungleChampion';

/**
 * Componente de tabla de campeones jungla de League of Legends.
 *
 * Se utiliza para mostrar un listado de campeones en una tabla,
 * incluyendo su información principal y un badge visual que identifica
 * la clase de cada campeón.
 *
 * @remarks
 * Este componente recibe los campeones desde un componente padre
 * a través del Input `champions` y utiliza el mapeo `classMap`
 * para asignar tipos de badge según la clase.
 *
 * Forma parte de la capa de presentación y se considera
 * un componente puramente presentacional (sin lógica de negocio).
 *
 * @example
 * ```html
 * <app-lol-jungle-table [champions]="champions"></app-lol-jungle-table>
 * ```
 */
@Component({
  selector: 'app-lol-jungle-table',
  imports: [CommonModule, BadgeAtom],
  templateUrl: './lol-jungle-table.html',
  styleUrl: './lol-jungle-table.scss',
})
export class LolJungleTable {
  /**
   * Listado de campeones jungla que se mostrarán en la tabla.
   *
   * @type {JungleChampion[]}
   * @remarks
   * Este Input permite pasar un array de campeones desde el componente padre.
   * Cada campeón debe cumplir con la interfaz `JungleChampion`.
   */
  @Input() champions: JungleChampion[] = [];

  /**
   * Mapeo de clases de campeón a tipos de Badge.
   *
   * @type {Record<string, BadgeType>}
   * @remarks
   * Se utiliza para asignar un color de badge a cada clase:
   * - 'Asesino'   -> 'danger'
   * - 'Luchador'  -> 'warning'
   * - 'Tanque'    -> 'primary'
   * - 'Mago'      -> 'info'
   * - 'Tirador'   -> 'success'
   */
  classMap: Record<string, BadgeType> = {
    'Asesino':  'danger',
    'Luchador': 'warning',
    'Tanque':   'primary',
    'Mago':     'info',
    'Tirador':  'success',
  };
}
