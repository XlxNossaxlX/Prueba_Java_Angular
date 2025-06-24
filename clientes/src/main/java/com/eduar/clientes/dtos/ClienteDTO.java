package com.eduar.clientes.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ClienteDTO {

    @NotBlank(message = "El documento es obligatorio")
    private String documento;

    @NotBlank(message = "El nombre es obligatorio")
    private String nombre;

    @NotBlank
    private String apellidos;

    @NotNull(message = "La fecha de nacimiento es obligatoria")
    private LocalDate fechaNacimiento;

    @NotBlank
    private String ciudad;

    @Email
    @NotBlank(message = "El correo electronico es obligatorio")
    private String correoElectronico;

    @NotBlank
    private String telefono;

    @Pattern(regexp = "Empleado|Independiente|Pensionado", message = "La ocupación debe ser Empleado, Independiente o Pensionado")
    @NotBlank(message = "La ocupación es obligatoria")
    private String ocupacion;
}