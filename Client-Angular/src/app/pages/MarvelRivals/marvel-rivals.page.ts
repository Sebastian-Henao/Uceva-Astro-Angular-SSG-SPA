import { Component, inject } from '@angular/core';
import { MarvelRivalsTableComponent } from '../../components/MarvelRivals-table/marvel-rivals-table.component';
import { AlertComponent } from '../../components/alert/alert.component';
import { MarvelRivals } from '../../interfaces/MarvelRivals.interface';
import { State } from '../../interfaces/state.interface';
import { MarvelRivalsService } from '../../services/MarvelRivals/marvel-rivals.service';

/**
 * Componente contenedor de personajes
 * 
 * Se utiliza para gestionar y mostrar un listado de personajes
 * de Marvel Rivals utilizando el componente MarvelRivalsTableComponent
 * 
 * @remarks
 * Este componente se encarga de consumir el servicio 'MarvelRivalsService'
 * para obtener los personajes y pasarlos al componente de tabla
 * Forma parte de la capa de presentacion de la aplicacion
 */
@Component({
  selector: 'app-marvel-rivals',
  imports: [MarvelRivalsTableComponent, AlertComponent],
  templateUrl: './marvel-rivals.page.html',
})
export class MarvelRivalsPage {
  /**
   * Listado de personajes obtenidos desde el servicio
   * @type {MarvelRivals[]}
   */
  Marvelrivals: MarvelRivals[] = [];
  /**
   * Estado actual del componente
   * 
   * @default 'init
   */
    state: State = 'init';
  
    /**
     * Servicio para obtener personajes
     * @remarks
     * Se inyecta utilizando la funcion 'inject()' de Angular
     */
  private marvelRivalsService = inject(MarvelRivalsService);

  /**
   * Inicializa el componente y carga los personajes
   * @remarks
   * Se suscribe al metodo 'getAllMarvelRivals()' del servicio y
   * asigna los datos recibidos a la propiedad marvelRivals
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.marvelRivalsService.getAllMarvelRivals().subscribe({
      next: (Marvelrivals) => {
        this.Marvelrivals = Marvelrivals;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }
}
