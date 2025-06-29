import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ){}

  registrarCliente() {
    this.clienteService.crearCliente(this.cliente).subscribe({
      next: (respuesta: any) => {
        console.log('Cliente registrado: ', respuesta);
        alert('Cliente creado');
        this.router.navigate(['/listar-clientes']);
      },
      error: (error: any) => {
        console.error('Error al registrar el cliente:', error);
        alert('Hubo un error al registrar');
      }
    });
  }
}