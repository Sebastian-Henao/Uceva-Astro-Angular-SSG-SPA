import type { JungleChampion } from "@interfaces/JungleChampion";

/**
 * Data local con los 20 campeones jungla de League of Legends.
 *
 * @remarks
 * Copia exacta del mock de Angular, garantizando que ambas vistas
 * (SPA y SSG) muestren el mismo contenido y la comparación de builds
 * sea justa y reproducible.
 */
export const JUNGLE_CHAMPIONS: JungleChampion[] = [
  { id: 1,  name: 'Lee Sin',    title: 'El Monje Ciego',                  class: 'Luchador', region: 'Jonia' },
  { id: 2,  name: 'Elise',      title: 'La Reina de las Arañas',          class: 'Mago',     region: 'Islas de la Sombra' },
  { id: 3,  name: "Kha'Zix",   title: 'El Saqueador del Vacío',          class: 'Asesino',  region: 'El Vacío' },
  { id: 4,  name: 'Rengar',     title: 'El Orgullo Acechante',            class: 'Asesino',  region: 'Ixtal' },
  { id: 5,  name: 'Jarvan IV',  title: 'El Ejemplo de Demacia',           class: 'Tanque',   region: 'Demacia' },
  { id: 6,  name: 'Vi',         title: 'La Vigilante de Piltóver',        class: 'Luchador', region: 'Piltóver' },
  { id: 7,  name: 'Warwick',    title: 'La Ira Desencadenada de Zaun',    class: 'Luchador', region: 'Zaun' },
  { id: 8,  name: 'Nocturne',   title: 'La Pesadilla Eterna',             class: 'Asesino',  region: 'Runaterra' },
  { id: 9,  name: 'Amumu',      title: 'La Momia Triste',                 class: 'Tanque',   region: 'Shurima' },
  { id: 10, name: 'Graves',     title: 'El Forajido',                     class: 'Tirador',  region: 'Aguasturbias' },
  { id: 11, name: 'Kindred',    title: 'Los Cazadores Eternos',           class: 'Tirador',  region: 'Runaterra' },
  { id: 12, name: 'Master Yi',  title: 'La Espada Wuju',                  class: 'Asesino',  region: 'Jonia' },
  { id: 13, name: 'Hecarim',    title: 'La Sombra de la Guerra',          class: 'Luchador', region: 'Islas de la Sombra' },
  { id: 14, name: 'Sejuani',    title: 'La Furia del Norte',              class: 'Tanque',   region: 'Freljord' },
  { id: 15, name: 'Zac',        title: 'El Arma Secreta',                 class: 'Tanque',   region: 'Zaun' },
  { id: 16, name: 'Nidalee',    title: 'La Cazadora Bestial',             class: 'Asesino',  region: 'Ixtal' },
  { id: 17, name: 'Evelynn',    title: 'El Abrazo de la Agonía',          class: 'Asesino',  region: 'Runaterra' },
  { id: 18, name: 'Shaco',      title: 'El Bufón Siniestro',              class: 'Asesino',  region: 'Runaterra' },
  { id: 19, name: 'Viego',      title: 'El Rey Arruinado',                class: 'Asesino',  region: 'Islas de la Sombra' },
  { id: 20, name: 'Lillia',     title: 'La Flor Tímida',                  class: 'Luchador', region: 'Jonia' },
];
