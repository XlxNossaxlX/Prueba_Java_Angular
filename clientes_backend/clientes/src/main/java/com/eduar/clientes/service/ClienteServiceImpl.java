package com.eduar.clientes.service;

import com.eduar.clientes.dtos.ClienteDTO;
import com.eduar.clientes.dtos.ClienteResponseDTO;
import com.eduar.clientes.mapper.ClienteMapper;
import com.eduar.clientes.model.Cliente;
import com.eduar.clientes.repository.ClienteRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClienteServiceImpl implements ClienteService {

    private final ClienteRepository clienteRepository;

    public ClienteServiceImpl(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    @Override
    public ClienteResponseDTO crearCliente(ClienteDTO dto) {
        Cliente cliente = ClienteMapper.toEntity(dto);
        cliente.setEsViable(calcularViabilidad(dto.getFechaNacimiento()));
        clienteRepository.save(cliente);
        if (!calcularViabilidad(dto.getFechaNacimiento())) {
            throw new RuntimeException("El cliente no está en edad productiva para ser registrado");
        }
        return ClienteMapper.toResponseDTO(cliente);
    }

    @Override
    public List<ClienteResponseDTO> listarClientes() {
        return clienteRepository.findAll().stream()
                .map(ClienteMapper::toResponseDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ClienteResponseDTO obtenerPorDocumento(String documento) {
        Cliente cliente = clienteRepository.findByDocumento(documento).orElseThrow(() -> new RuntimeException("Cliente no encontrado"));
        return ClienteMapper.toResponseDTO(cliente);
    }

    @Override
    public ClienteResponseDTO actualizarCliente(String documento, ClienteDTO dto) {
        Cliente clienteExistente = clienteRepository.findById(documento)
                .orElseThrow(() -> new RuntimeException("Cliente con documento " + documento + " no encontrado"));

        clienteExistente.setNombre(dto.getNombre());
        clienteExistente.setApellidos(dto.getApellidos());
        clienteExistente.setFechaNacimiento(dto.getFechaNacimiento());
        clienteExistente.setCiudad(dto.getCiudad());
        clienteExistente.setCorreoElectronico(dto.getCorreoElectronico());
        clienteExistente.setTelefono(dto.getTelefono());
        clienteExistente.setOcupacion(dto.getOcupacion());
        clienteExistente.setEsViable(calcularViabilidad(dto.getFechaNacimiento()));

        clienteRepository.save(clienteExistente);
        return ClienteMapper.toResponseDTO(clienteExistente);
    }

    @Override
    public void eliminarCliente(String documento) {
        if (!clienteRepository.existsById(documento)) {
            throw new RuntimeException("Cliente con documento " + documento + " no encontrado");
        }
        clienteRepository.deleteById(documento);
    }

    private boolean calcularViabilidad(LocalDate fechaNacimiento) {
        int edad = Period.between(fechaNacimiento, LocalDate.now()).getYears();
        return edad >= 18 && edad <= 65;
    }
}