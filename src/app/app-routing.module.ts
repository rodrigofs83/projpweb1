import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { NemuComponent } from './layout/nemu/nemu.component';
import { CadastroProdutoComponent } from './produto/cadastro-produto/cadastro-produto.component';
import { ListaprodutoComponent } from './produto/listaproduto/listaproduto.component';
import { CadastroUsuarioComponent } from './usuario/cadastro-usuario/cadastro-usuario.component';

const routes: Routes = [

{
    path:'cadastrarusuario',
    component:CadastroUsuarioComponent
},
{
    path:'listaproduto',
    component:ListaprodutoComponent

},
{
    path:'cadastroProduto',
    component:CadastroProdutoComponent
}


    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
