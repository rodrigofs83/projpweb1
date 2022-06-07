
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/shared/model/produto/produto';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import {MensagemService} from 'src/app/shared/services/mensagem.service';
@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  produto = new Produto(undefined);
  titulo ='Cadastrando Produto';
  operacaoCadrastro = true;
  constructor(private ProdutoService :ProdutoService,private rotalAtual: ActivatedRoute,private roteado:Router,
    private mensagemService: MensagemService){ 
    if(this.rotalAtual.snapshot.paramMap.has("id")){
      this.titulo = 'Editando Produto'
      this.operacaoCadrastro =false;
      const idParaEdicao = Number(this.rotalAtual.snapshot.paramMap.get('id'));
      //pega usuario do banco pelo id
      this.ProdutoService.buscaId(idParaEdicao).subscribe(
     // this.ProdutoService.buscaId(idParaEdicao || '').subscribe(
        produtoretonado =>this.produto=produtoretonado
    //EditarProd =>this.produto = EditarProd
    );
    }
    
  }
  ngOnInit(): void {
  }
  inseriProd():void{
    if(this.operacaoCadrastro)  {
      this.ProdutoService.atualizar(this.produto).subscribe(
        produtoalterado =>{
          console.log(produtoalterado);
          this.roteado.navigate(['listaproduto'])
          this.mensagemService.success('produto editado com sucesso!');

        }); 
      
    }else{
      this.ProdutoService.atualizar(this.produto).subscribe(
        produtoalterado =>{
          console.log(produtoalterado);
          this.roteado.navigate(['listaproduto'])
          
          this.mensagemService.success('produto cadastrado com sucesso!');
        }
      );
  
    }
  }
}
