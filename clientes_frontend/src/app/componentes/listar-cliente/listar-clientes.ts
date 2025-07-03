import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { ClienteService } from "../../servicios/cliente.service";
import { Cliente } from '../../modelos/cliente.model';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-listar-clientes',
    standalone: true,
    imports: [
        CommonModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule, 
        RouterModule,
        RouterLink
    ],
    templateUrl: './listar-clientes.html',
    styleUrls: ['./listar-clientes.css']
})
export class ListarClientesComponent implements OnInit {
    clientes: Cliente[] = [];
    columnas: string[] = [
        'documento',
        'nombre',
        'apellidos',
        'fechaNacimiento',
        'ciudad',
        'correoElectronico',
        'telefono',
        'ocupacion',
        'esViable',
        'acciones'
    ];
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