package com.eduar.clientes.dtos;
//Subir
import lombok.Data;

import java.time.LocalDate;

@Data
public class ClienteResponseDTO {

    private String documento;
    private String nombre;
    private String apellidos;
    private LocalDate fechaNacimiento;
    private String ciudad;
    private String correoElectronico;
    private String telefono;
    private String ocupacion;
    private Boolean esViable;
}