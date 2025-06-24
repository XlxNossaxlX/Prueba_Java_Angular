import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../servicios/cliente.service';

@Component({
  selector: 'app-registro-cliente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro-cliente.html',
  styleUrls: ['./registro-cliente.css']
})
export class RegistroClienteComponent {
  cliente: any = {};

  constructor(private clienteService: ClienteService) {}

  registrarCliente() {
    this.clienteService.crearCliente(this.cliente).subscribe({
      next: (respuesta: any) => {
        console.log('Cliente registrado: ', respuesta);
        alert('Cliente creado');
        this.cliente = {};
      },
      error: (error: any) => {
        console.error('Error al registrar el cliente:', error);
        alert('Hubo un error al registrar');
      }
    });
  }
}