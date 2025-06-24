CREATE TABLE cliente (
    documento VARCHAR(20) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    ciudad VARCHAR(100),
    correo_electronico VARCHAR(150),
    telefono VARCHAR(20),
    ocupacion VARCHAR(50) CHECK (ocupacion IN ('Empleado', 'Independiente', 'Pensionado')),
    es_viable BOOLEAN
);