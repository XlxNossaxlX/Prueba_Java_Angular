import { Component, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
import { ClienteService } from "../../servicios/cliente.service";
import { Cliente } from "../../modelos/cliente.model";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'app-editar-cliente',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule
  ],
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
    ocupacion: '',
    esViable: undefined
  };

  ciudadControl = new FormControl('');

  ciudadesDisponibles: string[] = [
    'Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena', 'Cúcuta',
    'Bucaramanga', 'Pereira', 'Manizales', 'Armenia', 'Santa Marta', 'Ibagué',
    'Pasto', 'Neiva', 'Villavicencio', 'Popayán', 'Valledupar', 'Montería',
    'Tunja', 'Riohacha', 'Quibdó', 'San Andrés'
  ];
  filteredCiudades: Observable<string[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService
  ) {
    this.filteredCiudades = this.ciudadControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
    this.ciudadControl.valueChanges.subscribe(value => {
      this.cliente.ciudad = value || '';
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.ciudadesDisponibles.filter(ciudad => ciudad.toLowerCase().includes(filterValue));
  }

  ngOnInit(): void {
    this.documento = String(this.route.snapshot.paramMap.get('documento'));
    this.clienteService.getClienteByDocumento(this.documento).subscribe({ next: (data: Cliente) => {
      this.cliente = data;
      this.ciudadControl.setValue(this.cliente.ciudad || '');
    }});
  }

  guardarCambios(): void {
    this.clienteService.actualizarCliente(this.documento, this.cliente).subscribe(() => {
      alert('Cliente actualizado con éxito');
      this.router.navigate(['/listar-clientes']);
    });
  }
}