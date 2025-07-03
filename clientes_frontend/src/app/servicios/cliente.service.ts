import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../modelos/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService  {
  private apiUrl = 'http://localhost:8080/clientes';
  constructor(private http: HttpClient) {}
  
  crearCliente(cliente: any): Observable<any> {
    return this.http.post(this.apiUrl, cliente);
  }

  getClienteByDocumento(documento: string): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.apiUrl}/${documento}`);
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  actualizarCliente(documento: string, cliente: Cliente): Observable<any> {
    return this.http.put(`${this.apiUrl}/${documento}`, cliente);
  }
  
  eliminarCliente(documento: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${documento}`);
  }
}