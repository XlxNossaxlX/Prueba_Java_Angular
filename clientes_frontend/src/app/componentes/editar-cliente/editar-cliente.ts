import { Component, OnInit } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
import { ClienteService } from "../../servicios/cliente.service";
import { Cliente } from "../../modelos/cliente.model";;

@Component({
  selector: 'app-editar-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-cliente.html',
  styleUrls: ['./editar-cliente.css']
})
export class EditarClienteComponent implements OnInit {

  documento: string = '';
  cliente: Cliente = {
    documento: '',
    nombre: '',
    apellidos: '',
    fechaNacimiento: '',
    ciudad: '',
    telefono: '',
    correoElectronico: '',
    ocupacion: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.documento = String(this.route.snapshot.paramMap.get('documento'));
    this.clienteService.getClienteByDocumento(this.documento).subscribe((data: Cliente) => {
      this.cliente = data;
    });
  }

  guardarCambios(): void {
    this.clienteService.actualizarCliente(this.documento, this.cliente).subscribe(() => {
      alert('Cliente actualizado con éxito');
      this.router.navigate(['/listar-clientes']);
    });
  }
}