import { Usuario } from './../model/usuario/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL_Usuarios='http://localhost:80/usuario';
  constructor(private httpClient: HttpClient) { }


  inserir(usuario:Usuario):Observable<Usuario>{
    return this.httpClient.post<Usuario>(this.URL_Usuarios,usuario)
  }
  listar(): Observable<Usuario[]> {
    // GET /usuarios/
      return this.httpClient.get<Usuario[]>(this.URL_Usuarios);
    }
    remover(id: number): Observable<object> {
      // DELETE /usuarios/id
      return this.httpClient.delete(`${this.URL_Usuarios}/${id}`);
    }
    alterar(usuarioNovosValores: Usuario): Observable<Usuario> {
      // PUT /usuarios/id
      return this.httpClient.put<Usuario>(`${this.URL_Usuarios}/${usuarioNovosValores.id}`, usuarioNovosValores);
    }
  
    pesquisarPorId(id: number): Observable<Usuario> {
      // GET /usuarios/id
      return this.httpClient.get<Usuario>(`${this.URL_Usuarios}/${id}`);
    }

}
