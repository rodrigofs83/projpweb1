import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CadastroProdutoComponent } from './produto/cadastro-produto/cadastro-produto.component';
import { ListaprodutoComponent } from './produto/listaproduto/listaproduto.component';
import { TabelaProdutoComponent } from './produto/tabela-produto/tabela-produto.component';
import { CadastroUsuarioComponent } from './usuario/cadastro-usuario/cadastro-usuario.component';
import { ListaUsuarioComponent } from './usuario/lista-usuario/lista-usuario.component';

const routes: Routes = [

{
    path:'cadastrarusuario',
    component:CadastroUsuarioComponent
},
{
    path:'cadastroProduto',
    component:CadastroProdutoComponent
},
{
    path:'listaproduto',
    component:ListaprodutoComponent

},
{
    path:'listaprodutotabela',
    component:TabelaProdutoComponent
},
{  
    path:'cadastroProduto/:id',
    component:CadastroProdutoComponent
    
},

{
    path:'cadastroProduto/id/:produto',
    component:CadastroProdutoComponent
},
{
    path: 'cadastrarusuario',
    component: CadastroUsuarioComponent
},
{
    path: 'editarusuario/:id',
    component:CadastroUsuarioComponent
},
{
    path: 'listarusuarios',
    component: ListaUsuarioComponent
},    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
