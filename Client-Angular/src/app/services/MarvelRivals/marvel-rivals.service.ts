import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MarvelRivals } from '../../interfaces/MarvelRivals.interface';
import { PERSONAJES_MARVEL_RIVALS } from '../../data/MarvelRivals.interface';

/**
 * Servicio encargado de la gestion de personajes de Marvel Rivals
 * 
 * Proporciona metodos para obtener informacion de personajes desde
 * la data local
 */

@Injectable({
  providedIn: 'root',
})
export class MarvelRivalsService {
  /**
   * Obtiene una lista de personajes desde el backend
   * 
   * @returns Observable que emite un array de personajes
   */
  getAllMarvelRivals(): Observable<MarvelRivals[]> {
    return of(PERSONAJES_MARVEL_RIVALS);
  }
}
