import { Usuario } from './../../shared/model/usuario';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
  usuario:Usuario;
  constructor() {
    this.usuario = new Usuario();
   }
  ngOnInit(): void {
  }

}
