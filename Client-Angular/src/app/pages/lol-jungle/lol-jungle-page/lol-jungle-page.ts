import { Component, inject } from '@angular/core';
import { LolJungleTable } from '../../../components/lol-jungle-table/lol-jungle-table';
import { AlertComponent } from '../../../components/alert/alert.component';
import { JungleChampion } from '../../../interfaces/JungleChampion';
import { State } from '../../../interfaces/state.interface';
import { LolJungleService } from '../../../services/lol-jungle/lol-jungle';

/**
 * Componente contenedor de campeones jungla de League of Legends.
 *
 * Se utiliza para gestionar y mostrar el listado de campeones jungla
 * utilizando el componente `LolJungleTable` como presentador.
 *
 * @remarks
 * Este componente (Smart Component) es responsable de:
 * - Inyectar y consumir el `LolJungleService` para obtener los datos
 * - Gestionar el estado de carga ('init', 'loading', 'success', 'error')
 * - Pasar los datos obtenidos al componente presentacional `LolJungleTable`
 *
 * Forma parte de la capa de presentación de la aplicación.
 */
@Component({
  selector: 'app-lol-jungle-page',
  imports: [LolJungleTable, AlertComponent],
  templateUrl: './lol-jungle-page.html',
  styleUrl: './lol-jungle-page.scss',
})
export class LolJunglePage {
  /**
   * Listado de campeones obtenidos desde el servicio.
   * @type {JungleChampion[]}
   */
  champions: JungleChampion[] = [];

  /**
   * Estado actual del componente.
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Servicio para obtener los campeones jungla.
   * @remarks Se inyecta utilizando la función `inject()` de Angular.
   */
  private lolJungleService = inject(LolJungleService);

  /**
   * Inicializa el componente y carga los campeones.
   * @remarks
   * Se suscribe al método `getJungleChampions()` del servicio y
   * asigna los datos recibidos a la propiedad `champions`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.lolJungleService.getJungleChampions().subscribe({
      next: (champions) => {
        this.champions = champions;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}
