import { Usuario } from '../../shared/model/usuario/usuario';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/shared/services/usuario.service';


@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  usuario:Usuario;
  hide: boolean;
  
  constructor(private UsuarioService:UsuarioService) {

    this.usuario = new Usuario();
    this.hide = true;
  
    
}



  ngOnInit(): void {
  }
  inseriUsuario():void{
    this.UsuarioService.inserir(this.usuario).subscribe(
      usuario=>console.log(this.usuario,'prod')
    )
  }
}



