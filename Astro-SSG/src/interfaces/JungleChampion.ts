/**
 * Representa un campeón jungla de League of Legends.
 *
 * @remarks
 * Interfaz idéntica a la utilizada en la app Angular,
 * lo que garantiza que ambas vistas consuman exactamente
 * el mismo contrato de datos y sean comparables entre sí.
 */
export interface JungleChampion {
  /** Identificador único numérico del campeón. */
  id: number;
  /** Nombre del campeón (ej. 'Lee Sin'). */
  name: string;
  /** Título oficial del campeón dentro del lore (ej. 'El Monje Ciego'). */
  title: string;
  /** Clase de juego del campeón: Asesino, Luchador, Tanque, Mago o Tirador. */
  class: string;
  /** Región del universo de Runaterra a la que pertenece el campeón. */
  region: string;
}
