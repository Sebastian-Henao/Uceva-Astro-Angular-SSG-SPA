import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { VideojuegosTable } from '../../components/videojuegos-table/videojuegos-table';
import { Videojuego } from '../../interfaces/videojuego.interface';
import { State } from '../../interfaces/state.interface';
import { VideojuegosService } from '../../services/videojuegos/videojuegos.service';

/** Pagina que coordina la carga y visualizacion del catalogo de videojuegos. */
@Component({
  selector: 'app-videojuegos-page',
  imports: [AlertComponent, VideojuegosTable],
  templateUrl: './videojuegos.page.html',
})
export class VideojuegosPage {
  /** Videojuegos recibidos desde el servicio. */
  videojuegos: Videojuego[] = [];

  /** Estado de la carga del catalogo. */
  state: State = 'init';

  private videojuegosService = inject(VideojuegosService);

  /** Carga el catalogo cuando se inicializa la pagina. */
  ngOnInit(): void {
    this.state = 'loading';
    this.videojuegosService.getVideojuegos().subscribe({
      next: (videojuegos) => {
        this.videojuegos = videojuegos;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}