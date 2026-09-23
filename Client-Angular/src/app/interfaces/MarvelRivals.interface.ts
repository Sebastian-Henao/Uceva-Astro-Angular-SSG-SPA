export interface MarvelRivals {
    id: number;
    nombre: string;
    alias: string;
    equipo: string;
    habilidad: string;
    rol: RolCategoria;
}

export type RolCategoria = 'Vanguardia' | 'Duelista' | 'Estratega' | 'Variable';