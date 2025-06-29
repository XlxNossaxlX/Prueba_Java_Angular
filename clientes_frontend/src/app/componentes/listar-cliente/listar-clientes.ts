import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClienteService } from "../../servicios/cliente.service";
import { Cliente } from '../../modelos/cliente.model';

@Component({
    selector: 'app-listar-clientes',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './listar-clientes.html',
    styleUrls: ['./listar-clientes.css']
})
export class ListarClientesComponent implements OnInit {
    clientes: Cliente[] = [];
    constructor(private clienteService: ClienteService){}

    ngOnInit(): void { 
        this.cargarClientes();
    }
    cargarClientes(): void {
        this.clienteService.getClientes().subscribe((clientes: Cliente[]) => {
        this.clientes = clientes;
        });
    }
    eliminar(documento: string): void {
        if(confirm('¿Estás seguro de eliminar este cliente?')) {
            this.clienteService.eliminarCliente(documento).subscribe(() => {
                alert('Cliente eliminado');
                this.cargarClientes();
            });
        }
    }
} 