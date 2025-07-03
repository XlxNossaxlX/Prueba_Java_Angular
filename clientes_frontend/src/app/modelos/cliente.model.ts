export interface Cliente {
  documento: string,
  nombre: string;
  apellidos: string;
  fechaNacimiento: string;
  ciudad: string;
  telefono: string;
  correoElectronico: string,
  ocupacion: string;
  esViable?: boolean;
}