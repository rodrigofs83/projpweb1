import { NumberInput } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/model/produto/produto';
@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  nome:string;;
  categoria:string;
  preco:number;
  imagem:string;
  produto:Produto;
  constructor(){ 
    this.nome='';
    this.categoria='';
    this.preco=0;
    this.imagem='';
    this.produto = new Produto(this.nome,this.categoria,this.preco,this.imagem)

  }

  ngOnInit(): void {
  }

}
