import { Usuario } from './../model/usuario/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL_Usuarios='http://localhost:3000/usuarios';
  constructor(private httpClient: HttpClient) { }


  inserir(usuario:Usuario):Observable<Usuario>{
    return this.httpClient.post<Usuario>(this.URL_Usuarios,usuario)
  }

}
