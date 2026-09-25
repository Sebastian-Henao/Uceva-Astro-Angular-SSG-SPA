/**
 * Representa un videojuego disponible en el catalogo.
 */
export interface Videojuego {
  /** Identificador unico del videojuego. */
  id: number;
  /** Nombre comercial del videojuego. */
  nombre: string;
  /** Genero principal del videojuego. */
  genero: string;
  /** Plataformas en las que se puede jugar. */
  plataformas: string;
  /** Ano de lanzamiento. */
  lanzamiento: number;
  /** Estudio responsable del desarrollo. */
  desarrollador: string;
}