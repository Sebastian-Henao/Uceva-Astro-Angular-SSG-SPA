/**
 * Representa un campeón jungla de League of Legends.
 *
 * @remarks
 * Esta interfaz define el contrato de datos utilizado tanto
 * en el mock local como en el servicio `LolJungleService`.
 * Cada campo es obligatorio y tipado estrictamente.
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
