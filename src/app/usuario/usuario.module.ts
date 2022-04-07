import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CadastroUsuarioComponent],
    exports:[
      CadastroUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class UsuarioModule { }