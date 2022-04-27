
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/shared/model/produto/produto';
import { ProdutoService } from 'src/app/shared/services/produto.service';
@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  produto:Produto;
  constructor(private ProdutoService :ProdutoService,private rotalAtual: ActivatedRoute,private roteado:Router){ 
    this.produto = new Produto()
    if(this.rotalAtual.snapshot.paramMap.has("id")){
      const idParaEdicao = Number(this.rotalAtual.snapshot.paramMap.get('id'));
      //pega usuario do banco pelo id
      this.ProdutoService.buscaId(idParaEdicao).subscribe(
        
        produtoretonado =>this.produto=produtoretonado
      );
    }
    
  }
  ngOnInit(): void {
  }
  inseriProd():void{
    if(this.produto.id){
      this.ProdutoService.atualizar(this.produto).subscribe(
        produtoalterado =>{
          console.log(produtoalterado);
          this.roteado.navigate(['listaproduto'])
          
        }
      )
    }else{
    this.produto = new Produto();
    this.ProdutoService.inserir(this.produto).subscribe(
      produto =>console.log(this.produto)
      
    )};
  }

}
