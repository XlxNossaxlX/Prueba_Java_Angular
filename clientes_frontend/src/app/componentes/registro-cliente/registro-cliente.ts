import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ClienteService } from '../../servicios/cliente.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'app-registro-cliente',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  templateUrl: './registro-cliente.html',
  styleUrls: ['./registro-cliente.css']
})
export class RegistroClienteComponent {
  cliente: any = {
    documento: '',
    nombre: '',
    apellidos: '',
    fechaNacimiento: '',
    ciudad: '',
    correoElectronico: '',
    telefono: '',
    ocupacion: ''
  };
  ciudadControl = new FormControl('');
  ciudadesDisponibles: string[] = [
    'Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena', 'Cúcuta',
    'Bucaramanga', 'Pereira', 'Manizales', 'Armenia', 'Santa Marta', 'Ibagué',
    'Pasto', 'Neiva', 'Villavicencio', 'Popayán', 'Valledupar', 'Montería',
    'Tunja', 'Riohacha', 'Quibdó', 'San Andrés'
  ];
  filteredCiudades: Observable<string[]>;

  mensajesError: string[] = [];
  constructor(
    private clienteService: ClienteService,
    private router: Router
  ){
    this.filteredCiudades = this.ciudadControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );

    this.ciudadControl.valueChanges.subscribe(value => {
      this.cliente.ciudad = value;
    });
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.ciudadesDisponibles.filter(ciudad => ciudad.toLowerCase().includes(filterValue));
  }
  registrarCliente() {
    this.mensajesError = [];
    this.clienteService.crearCliente(this.cliente).subscribe({
      next: (respuesta: any) => {
        console.log('Cliente registrado exitosamente:', respuesta);
        alert('Cliente creado exitosamente!');
        this.router.navigate(['/listar-clientes']);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error completo al registrar el cliente:', error);
        if (error.status === 400 && error.error && typeof error.error === 'object') {
          for (const campo in error.error) {
            if (Object.prototype.hasOwnProperty.call(error.error, campo)) {
              this.mensajesError.push(`${campo}: ${error.error[campo]}`);
            }
          }
        } else if (error.status === 404) {
          if (error.error && error.error.mensaje) {
            alert('El cliente no está en edad productiva para ser registrado');
            this.mensajesError.push(`Mensaje del servidor: ${error.error.mensaje}`);
          }
        } else if (error.status === 500 && error.error && error.error.mensaje) {
          alert('Mensaje de prueba de errores 2');
          this.mensajesError.push(`Error del servidor: ${error.error.mensaje}`);
        } else if (error.message) {
          alert('Mensaje de prueba de errores 3');
          this.mensajesError.push(`Error de conexión: ${error.message}`);
        } else {
          alert('Mensaje de prueba de errores 4');
          this.mensajesError.push('Ocurrió un error inesperado al registrar el cliente.');
        }
      }
    });
  }
}