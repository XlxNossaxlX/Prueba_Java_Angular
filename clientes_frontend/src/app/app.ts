import { Component } from '@angular/core';
import { RegistroClienteComponent } from './componentes/registro-cliente/registro-cliente';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegistroClienteComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'clientes-frontend';
}