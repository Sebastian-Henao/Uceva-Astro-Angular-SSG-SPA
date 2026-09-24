import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JungleChampion } from '../../interfaces/JungleChampion';
import { JUNGLE_CHAMPIONS } from '../../mocks/JungleChampions';

@Injectable({
  providedIn: 'root',
})
export class LolJungleService {
  constructor() {}

  getJungleChampions(): Observable<JungleChampion[]> {
    return of(JUNGLE_CHAMPIONS);
  }
}
