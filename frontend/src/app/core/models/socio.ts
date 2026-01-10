export interface Socio {
    id?: number;
    nombre: string;
    apellido: string;
    fechaNacimiento: string;
    fechaAlta: string;
    dni: number;
    telefono: string;
    mail: string;
    calle: string;
    altura: number;
    cp: number;
    localidad: string;
    titularId?: number;
    titularNombre?: string;
    tipoSocioId: number;
    tipoSocioNombre: string;
    adherentesIds: number[];
}