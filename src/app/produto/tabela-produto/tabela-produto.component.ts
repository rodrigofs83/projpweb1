
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/model/produto/produto';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-tabela-produto',
  templateUrl: './tabela-produto.component.html',
  styleUrls: ['./tabela-produto.component.css']
})
export class TabelaProdutoComponent implements OnInit {
  produtos:MatTableDataSource<Produto>;
  mostraColunas=['id','nome','preco','categoria','excluir/editar'];
  constructor(private ProdutoService:ProdutoService) { }

  ngOnInit(): void {
    this.ProdutoService.lista().subscribe(
    produtos => this.produtos = new MatTableDataSource<Produto>(produtos)
    )
  }
  filtrar(texto: string): void {
    this.produtos.filter = texto.trim().toLowerCase();
  }
apagar(id:number):void{
 /* this.ProdutoService.remover(id).subscribe(
    apagado =>{
      const index=this.produtos.data.findIndex(produto=>produto.id===id);
      if(index>-1){
        this.produtos.data.slice(index,1);
        this.produtos =new MatTableDataSource<Produto>(this.produtos.data);
      }
      
    }
  );
*/
}
}
