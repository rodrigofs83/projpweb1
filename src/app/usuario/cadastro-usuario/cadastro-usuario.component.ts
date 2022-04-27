import { Usuario } from '../../shared/model/usuario/usuario';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
  
  nome:string;
  cpf:string ;
  email:string;
  senha:string;
  usuario:Usuario;
  hide: boolean;
  
  constructor() {

    this.usuario = new Usuario();
    this.hide = true;
  
    
}



enviar(){
  
  alert()
  

}
  ngOnInit(): void {
  }

}



