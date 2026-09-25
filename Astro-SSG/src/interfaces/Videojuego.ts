/** Representa un videojuego del catalogo. */
export interface Videojuego {
  id: number;
  nombre: string;
  genero: string;
  plataformas: string;
  lanzamiento: number;
  desarrollador: string;
}