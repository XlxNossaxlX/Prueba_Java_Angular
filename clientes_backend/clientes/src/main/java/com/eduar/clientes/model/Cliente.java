package com.eduar.clientes.model;
// Cambio de prueba
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Table(name = "cliente")
@Data
public class Cliente {

    @Id
    private String documento;

    private String nombre;

    @Column(nullable = false)
    private String apellidos;

    @Column(name = "fecha_nacimiento")
    private LocalDate fechaNacimiento;

    private String ciudad;

    @Column(name = "correo_electronico")
    private String correoElectronico;

    private String telefono;

    private String ocupacion;

    @Column(name = "es_viable")
    private Boolean esViable;

    public Cliente() {
    }

    public Cliente(String documento, String nombre, String apellidos, LocalDate fechaNacimiento, String ciudad, String telefono, String correoElectronico, String ocupacion, Boolean esViable) {
        this.documento = documento;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.ciudad = ciudad;
        this.telefono = telefono;
        this.correoElectronico = correoElectronico;
        this.ocupacion = ocupacion;
        this.esViable = esViable;
    }
}