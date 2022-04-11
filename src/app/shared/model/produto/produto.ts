export class Produto{
        private nome;
        private categoria:string;
        private preco;
        private imagem:string;
        constructor(nome:string,categoria:string,preco:number,imagem:string){
            this.nome = nome;
            this.categoria = categoria;
            this.preco = preco;
            this.imagem = imagem; 
        }
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
    }
