package com.eduar.clientes.mapper;

import com.eduar.clientes.dtos.ClienteDTO;
import com.eduar.clientes.dtos.ClienteResponseDTO;
import com.eduar.clientes.model.Cliente;

public class ClienteMapper {

    public static Cliente toEntity(ClienteDTO dto) {
        Cliente cliente = new Cliente();
        cliente.setDocumento(dto.getDocumento());
        cliente.setNombre(dto.getNombre());
        cliente.setApellidos(dto.getApellidos());
        cliente.setFechaNacimiento(dto.getFechaNacimiento());
        cliente.setCiudad(dto.getCiudad());
        cliente.setCorreoElectronico(dto.getCorreoElectronico());
        cliente.setTelefono(dto.getTelefono());
        cliente.setOcupacion(dto.getOcupacion());
        return cliente;
    }

    public static ClienteResponseDTO toResponseDTO(Cliente cliente) {
        ClienteResponseDTO dto = new ClienteResponseDTO();
        dto.setDocumento(cliente.getDocumento());
        dto.setNombre(cliente.getNombre());
        dto.setApellidos(cliente.getApellidos());
        dto.setCiudad(cliente.getCiudad());
        dto.setCorreoElectronico(cliente.getCorreoElectronico());
        dto.setTelefono(cliente.getTelefono());
        dto.setOcupacion(cliente.getOcupacion());
        dto.setEsViable(cliente.getEsViable());
        return dto;
    }
}