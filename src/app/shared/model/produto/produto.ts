import { Usuario } from './../usuario/usuario';
export class Produto{

        id?:number;
        usuario?:Usuario;
        nome?:string ;
        categoria?:string;
        preco?:number;
        imagem?:string ;
    constructor(id?:number ,produto: Produto = {}){
        this.id = id;
        this.nome=produto.nome;
        this.categoria=produto.categoria;
        this.preco=produto.preco;
        this.imagem=produto.imagem
        this.usuario = produto.usuario
    }
/*
        GetProdNome(){
            return this.nome; 
        }
        SetProdNome(novo_nome:string){
            this.nome = novo_nome;
        
        }
        GetProdCategoria(){
            return this.categoria; 
        }
        SetProdCategoria(novo_cat:string){
            this.nome = novo_cat;
        
        }
        GetProdPreco(){
            return this.preco; 
        }
        SetProdPreco(novo_preco:number){
            this.preco = novo_preco;
        }
        GetProdImagem(){
            return this.imagem; 
        }
        SetProdImagem(novo_imagem:string){
            this.nome = novo_imagem;
        }
        */
    }
