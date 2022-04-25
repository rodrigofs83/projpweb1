export class Produto{

        id:number;
        nome:string | undefined;
        categoria:string | undefined;
        preco:number | undefined;
        imagem:string | undefined;
        constructor(nome:string,categoria:string,preco:number,imagem:string){
            this.id=0;
            this.nome=nome;
            this.categoria=categoria;
            this.preco=preco;
            this.imagem=imagem;
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
