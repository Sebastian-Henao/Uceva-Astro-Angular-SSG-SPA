/**
 * Interfaz que representa un personaje de Marvel Rivals
 * 
 * Contiene la informacion basica necesaria para mostrar un personaje
 * en la tabla o en cualquier componente de listado
 * 
 * @remarks
 * Cada personaje debe tener un 'id' unico, un 'nombre' del personaje,
 * su 'alias' de super heroe, un 'equipo' al que pertenece, una 'habilidad'
 * caracteristica y su 'rol' en el juego.
 */
export interface MarvelRivals {
    /**Identificador unico del personaje */
    id: number;

    /**Nombre del personaje */
    nombre: string;

    /**Nombre de super heroe */
    alias: string;

    /**Equipo al que pertenece */
    equipo: string;

    /**Habilidad caracteristica */
    habilidad: string;

    /**Rol dentro del juego */
    rol: RolCategoria;
}

/**
 * Tipo de rol del personaje
 * 
 * @remarks
 * Este tipo restringe los roles a los valores predefinidos:
 * - 'Vanguardia'
 * - 'Duelista'
 * - 'Estratega'
 * - 'Variable'
 * 
 * Se utiliza principalmente para mapear badges de colores en la UI 
 */
export type RolCategoria = 'Vanguardia' | 'Duelista' | 'Estratega' | 'Variable';