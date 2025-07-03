import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'listar-clientes', pathMatch: 'full'},
    {path: 'listar-clientes', loadComponent: () => import('./componentes/listar-cliente/listar-clientes')
        .then(m => m.ListarClientesComponent)},
    {path: 'registro-cliente', loadComponent: () => import('./componentes/registro-cliente/registro-cliente')
        .then(m => m.RegistroClienteComponent)
    },
    {path: 'editar-cliente/:documento', loadComponent: () => import('./componentes/editar-cliente/editar-cliente')
        .then(m => m.EditarClienteComponent)
    }
];