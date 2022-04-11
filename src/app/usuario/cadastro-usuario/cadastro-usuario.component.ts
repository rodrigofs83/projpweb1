import { Usuario } from './../../shared/model/usuario';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
  nome:string;
  cpf:string;
  email:string;
  senha:string;
  usuario:Usuario;
  hide: boolean;
  
  constructor() {
    this.nome='';
    this.cpf='';
    this.email='';
    this.senha='';
    this.usuario = new Usuario(this.nome,this.cpf,this.email,this.senha);
    this.hide = true;
  
    
}
enviar(){
  this.usuario.SetUserNome(this.nome)
  this.usuario.SetUserCpf(this.cpf)
  this.usuario.SetUserEmail(this.email)
  this.usuario.SetUserSenha(this.senha)
  alert(this.usuario.GetUserNome()+' '+this.usuario.GetUserEmail())
  

}
  ngOnInit(): void {
  }

}



