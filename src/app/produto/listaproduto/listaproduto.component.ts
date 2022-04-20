import { Produto } from 'src/app/shared/model/produto/produto';
import { Component, OnInit } from '@angular/core';
import { PRODUTOS } from 'src/app/shared/model/PRODUTOS';

@Component({
  selector: 'app-listaproduto',
  templateUrl: './listaproduto.component.html',
  styleUrls: ['./listaproduto.component.css']
})
export class ListaprodutoComponent implements OnInit {
produtos=PRODUTOS;

  constructor() { }

  ngOnInit(): void {
  }
remover(produto:Produto):void{
  const indexProdutoARemover = this.produtos.findIndex(p => p.GetProdNome() === produto.GetProdNome());
    if (indexProdutoARemover > -1) {
      this.produtos.splice(indexProdutoARemover, 1);
    }

}
}
