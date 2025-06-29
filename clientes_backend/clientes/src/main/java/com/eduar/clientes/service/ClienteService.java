package com.eduar.clientes.service;

import com.eduar.clientes.dtos.ClienteDTO;
import com.eduar.clientes.dtos.ClienteResponseDTO;

import java.util.List;

public interface ClienteService {
    ClienteResponseDTO crearCliente(ClienteDTO dto);
    ClienteResponseDTO obtenerPorDocumento(String documento);
    List<ClienteResponseDTO> listarClientes();
    ClienteResponseDTO actualizarCliente(String documento, ClienteDTO dto);
    void eliminarCliente(String documento);
}
