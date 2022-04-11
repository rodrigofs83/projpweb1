import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';



@NgModule({
  declarations: [CadastroProdutoComponent],
  exports:[
    CadastroProdutoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProdutoModule { }
