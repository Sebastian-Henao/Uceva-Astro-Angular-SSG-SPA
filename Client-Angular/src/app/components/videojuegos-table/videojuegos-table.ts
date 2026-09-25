import { Component, Input } from '@angular/core';
import { Videojuego } from '../../interfaces/videojuego.interface';

/** Componente presentacional que muestra el catalogo de videojuegos. */
@Component({
  selector: 'app-videojuegos-table',
  templateUrl: './videojuegos-table.html',
})
export class VideojuegosTable {
  /** Videojuegos que se muestran en la tabla. */
  @Input() videojuegos: Videojuego[] = [];
}