package com.eduar.clientes.dtos;

import lombok.Data;

@Data
public class ClienteResponseDTO {

    private String documento;
    private String nombre;
    private String apellidos;
    private String ciudad;
    private String correoElectronico;
    private String telefono;
    private String ocupacion;
    private Boolean esViable;
}