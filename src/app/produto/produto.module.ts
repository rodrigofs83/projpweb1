import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ListaprodutoComponent } from './listaproduto/listaproduto.component';
import  {FlexLayoutModule}  from  '@angular/flex-layout';



@NgModule({
  declarations: [
    CadastroProdutoComponent,
    ListaprodutoComponent

  ],
  exports:[
    CadastroProdutoComponent,
    ListaprodutoComponent

  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    FlexLayoutModule
    
  ]
})
export class ProdutoModule { }
