import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CadastroUsuarioComponent,
    ListaUsuarioComponent],
    exports:[
      CadastroUsuarioComponent,
      ListaUsuarioComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    RouterModule,
  ]
})
export class UsuarioModule { }