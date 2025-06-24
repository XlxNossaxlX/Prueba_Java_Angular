package com.eduar.clientes.controller;

import com.eduar.clientes.dtos.ClienteDTO;
import com.eduar.clientes.dtos.ClienteResponseDTO;
import com.eduar.clientes.service.ClienteService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clientes")
public class ClienteController {
    private final ClienteService clienteService;

    public ClienteController(ClienteService clienteService){
        this.clienteService = clienteService;
    }

    @PostMapping
    public ResponseEntity<ClienteResponseDTO> crearCliente(@Valid @RequestBody ClienteDTO dto){
        ClienteResponseDTO nuevoCliente = clienteService.crearCliente(dto);
        return ResponseEntity.ok(nuevoCliente);
    }

    @GetMapping
    public ResponseEntity<List<ClienteResponseDTO>> listarClientes(){
        return ResponseEntity.ok(clienteService.listarClientes());
    }

    @PutMapping("/{documento}")
    public ResponseEntity<ClienteResponseDTO> actualizarCliente(@PathVariable String documento,
                                                                @Valid @RequestBody ClienteDTO dto){
        ClienteResponseDTO actualizado = clienteService.actualizarCliente(documento, dto);
        return ResponseEntity.ok(actualizado);
    }

    @DeleteMapping("/{documento}")
    public ResponseEntity<Void> eliminarCliente(@PathVariable String documento){
        clienteService.eliminarCliente(documento);
        return ResponseEntity.noContent().build();
    }
}
