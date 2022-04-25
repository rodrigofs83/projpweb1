import { Produto } from './../../shared/model/produto/produto'
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listaproduto',
  templateUrl: './listaproduto.component.html',
  styleUrls: ['./listaproduto.component.css']
})
export class ListaprodutoComponent implements OnInit {
  produtos: Array<Produto> =[];
  constructor(private ProdutoService:ProdutoService,private roteador: Router) { 

  }
  ngOnInit(): void {
    this.ProdutoService.lista().subscribe(
      produtos => this.produtos =produtos
    )
  }
remover(produto:Produto):void{
  this.ProdutoService.remover(produto.id).subscribe(
    resposta =>{
      const indexProdutoARemover = this.produtos.findIndex(p => p.nome === produto.nome);
      if (indexProdutoARemover > -1) {
        this.produtos.splice(indexProdutoARemover, 1);
    }
  })
  }

  editar(produto:Produto):void{
  this.roteador.navigate(['cadastroProduto',produto.id]);
}
}