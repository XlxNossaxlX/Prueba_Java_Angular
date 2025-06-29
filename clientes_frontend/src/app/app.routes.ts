import { Routes } from '@angular/router';
import { RegistroClienteComponent } from './componentes/registro-cliente/registro-cliente';
import { ListarClientesComponent } from './componentes/listar-cliente/listar-clientes';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente';

export const routes: Routes = [
    { path: '', redirectTo: 'listar-clientes', pathMatch: 'full' },
    { path: 'listar-clientes', component: ListarClientesComponent },
    { path: 'registro-cliente', component: RegistroClienteComponent },
    { path: 'editar-cliente/:documento', component: EditarClienteComponent }
];