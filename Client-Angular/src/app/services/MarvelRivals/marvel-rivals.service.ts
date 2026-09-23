import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MarvelRivals } from '../../interfaces/MarvelRivals.interface';
import { PERSONAJES_MARVEL_RIVALS } from '../../data/MarvelRivals.interface';

@Injectable({
  providedIn: 'root',
})
export class MarvelRivalsService {
  getAllMarvelRivals(): Observable<MarvelRivals[]> {
    return of(PERSONAJES_MARVEL_RIVALS);
  }
}
