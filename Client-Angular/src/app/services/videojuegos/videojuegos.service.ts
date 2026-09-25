import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Videojuego } from '../../interfaces/videojuego.interface';
import { VIDEOJUEGOS } from '../../mocks/Videojuegos';

/** Servicio encargado de obtener el catalogo de videojuegos. */
@Injectable({
  providedIn: 'root',
})
export class VideojuegosService {
  /** Retorna el catalogo local como un Observable. */
  getVideojuegos(): Observable<Videojuego[]> {
    return of(VIDEOJUEGOS);
  }
}