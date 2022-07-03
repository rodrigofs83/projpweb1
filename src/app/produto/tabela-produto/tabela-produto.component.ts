
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/model/produto/produto';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabela-produto',
  templateUrl: './tabela-produto.component.html',
  styleUrls: ['./tabela-produto.component.css']
})
export class TabelaProdutoComponent implements OnInit {
  public dadosTabela:MatTableDataSource<Produto>;
  mostraColunas=['id','nome','preco','categoria','excluir/editar'];
  constructor(private ProdutoService:ProdutoService,private rotaAtual: ActivatedRoute) { 
    this.dadosTabela = new MatTableDataSource<Produto>();
  }

  ngOnInit(): void {
    this.carregarDados();
    //this.ProdutoService.lista().subscribe(
    //produtos => this.produtos = new MatTableDataSource<Produto>(produtos)
    //)
  }
  filtrar(texto: string): void {
    this.dadosTabela.filter = texto.trim().toLowerCase();
  }
  carregarDados(): void {
    this.ProdutoService.lista().subscribe(
      produto => {
        this.dadosTabela = new MatTableDataSource<Produto>(produto);
        this.rotaAtual.queryParams.subscribe(params =>
        {
          this.filtrar(params['filtro']);
        });

      }
    );
  }
apagar(produto:Produto,id:number):void{
  this.ProdutoService.remover(produto.id || -1).subscribe(
    apagado =>{
        this.dadosTabela.data.slice(id,1);
        this.dadosTabela =new MatTableDataSource<Produto>(this.dadosTabela.data);
      
      
    }
  );
}
}
