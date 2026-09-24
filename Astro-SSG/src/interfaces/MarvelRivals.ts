export interface MarvelRivals {
    id: number;
    nombre: String;
    alias: String;
    equipo: String;
    habilidad: String;
    rol: RolCategoria;
}

export type RolCategoria = 'Vanguardia' | 'Duelista' | 'Estratega' | 'Variable';