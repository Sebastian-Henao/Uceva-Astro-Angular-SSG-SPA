import { Component, Input } from '@angular/core';
import { MarvelRivals, RolCategoria } from '../../interfaces/MarvelRivals.interface';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marvel-rivals-table',
  imports: [CommonModule, BadgeAtom],
  templateUrl: './marvel-rivals-table.component.html',
})
export class MarvelRivalsTableComponent {
  @Input() marvelrivals: MarvelRivals[] = [];

  categoryMap: Record<RolCategoria, BadgeType> = {
    'Vanguardia': 'primary',
    'Duelista': 'danger',
    'Estratega': 'info',
    'Variable': 'warning',
  }
}
