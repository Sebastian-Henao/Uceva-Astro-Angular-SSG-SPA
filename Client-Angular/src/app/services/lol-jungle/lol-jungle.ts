import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JungleChampion } from '../../interfaces/JungleChampion';
import { JUNGLE_CHAMPIONS } from '../../mocks/JungleChampions';

/**
 * Servicio para obtener los campeones jungla de League of Legends.
 *
 * @remarks
 * Actúa como la capa de acceso a datos de la vista LoL Jungla.
 * Retorna los datos del mock local envueltos en un `Observable`,
 * imitando la interfaz de una petición HTTP real con `HttpClient`.
 * De esta forma, si en el futuro se conecta a una API real,
 * solo cambia la implementación interna del servicio sin afectar
 * a los componentes que lo consumen.
 */
@Injectable({
  providedIn: 'root',
})
export class LolJungleService {
  constructor() {}

  /**
   * Retorna el listado de los 20 campeones jungla.
   *
   * @returns {Observable<JungleChampion[]>} Observable que emite
   * el arreglo de campeones una sola vez al suscribirse.
   */
  getJungleChampions(): Observable<JungleChampion[]> {
    return of(JUNGLE_CHAMPIONS);
  }
}
