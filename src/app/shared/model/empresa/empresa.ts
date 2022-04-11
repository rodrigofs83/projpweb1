export class Empresa{
    private nome:string;
    private descricao:string;
    private logo:string;
    constructor(nome:string,descricao:string,logo:string){
        this.nome =nome;
        this.descricao=descricao;
        this.logo = logo;
    }
    GetProdNome(){
        return  this.nome;
    }
    SetProdNome( novo_nome:string){
        this.nome = novo_nome;
    }

    GetProdDescricao(){
        return  this.descricao;
    }
    SetProdDesc( novo_desc:string){
        this.descricao = novo_desc;
    }
    GetProdLogo(){
        return  this.logo;
    }
    SetProdLogo( novo_logo:string){
        this.nome = novo_logo;
    }
}