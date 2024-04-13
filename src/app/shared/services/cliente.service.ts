import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Cliente } from '../material/models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  api = `${environment.api}/clientes/`;

  constructor(private clienteHttp: HttpClient) { }

  inserir(cliente: Cliente): Observable<Cliente>{
    return this.clienteHttp.post<Cliente>(this.api, cliente)
  }

  listar(): Observable<Cliente[]>{
    return this.clienteHttp.get<Cliente[]>(this.api)
  }

  delete(id: number): Observable<object>{
    return this.clienteHttp.delete(`${this.api}${id}`)
  }

  buscarPorId(id: number): Observable<Cliente>{
    return this.clienteHttp.get<Cliente>(`${this.api}${id}`)
  }

  atualizar(cliente: Cliente): Observable<Cliente>{
    return this.clienteHttp.put<Cliente>(`${this.api}${cliente.id}`, cliente)
  }

  listar_paginado(page: number, pageSize: number){
    return this.clienteHttp.get<Cliente[]>(`${this.api}?page=${page}&pageSize=${pageSize}`)
  }

}
