import type { Videojuego } from '@interfaces/Videojuego';

/** Catalogo local de videojuegos para la pagina estatica. */
export const VIDEOJUEGOS: Videojuego[] = [
  { id: 1, nombre: 'The Legend of Zelda: Breath of the Wild', genero: 'Aventura', plataformas: 'Nintendo Switch, Wii U', lanzamiento: 2017, desarrollador: 'Nintendo' },
  { id: 2, nombre: 'God of War Ragnarök', genero: 'Accion', plataformas: 'PlayStation, PC', lanzamiento: 2022, desarrollador: 'Santa Monica Studio' },
  { id: 3, nombre: 'Minecraft', genero: 'Supervivencia', plataformas: 'PC, Consolas, Movil', lanzamiento: 2011, desarrollador: 'Mojang Studios' },
  { id: 4, nombre: 'Hades', genero: 'Roguelike', plataformas: 'PC, Switch, Consolas', lanzamiento: 2020, desarrollador: 'Supergiant Games' },
  { id: 5, nombre: 'Elden Ring', genero: 'RPG', plataformas: 'PC, PlayStation, Xbox', lanzamiento: 2022, desarrollador: 'FromSoftware' },
  { id: 6, nombre: 'Hollow Knight', genero: 'Metroidvania', plataformas: 'PC, Switch, PlayStation, Xbox', lanzamiento: 2017, desarrollador: 'Team Cherry' },
];