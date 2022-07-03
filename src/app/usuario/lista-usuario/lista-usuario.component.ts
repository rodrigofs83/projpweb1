import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/model/usuario/usuario';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  usuarios: Usuario[];
  constructor(private usuarioService: UsuarioService) {
    this.usuarios = new Array<Usuario>();
  }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

  removerUsuario(usuario: Usuario) {
    this.usuarioService.remover(usuario.id || 0).subscribe(
      removido => {
        const indxUsuario = this.usuarios.findIndex(u => u.id === usuario.id);

        if (indxUsuario > -1) {
          this.usuarios.splice(indxUsuario, 1);
        }
      }
    );
  }
}