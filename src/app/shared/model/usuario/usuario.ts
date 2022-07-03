import { Produto } from 'src/app/shared/model/produto/produto';
export class Usuario{
    id?:number;
    nome?:string;
    cpf?:string ;
    email?:string ;
    senha?:string ;
    produto?:Array<Produto>[];
    constructor(id?:number ,usuario:Usuario={}){
        this.id = id;
        this.nome = usuario.nome;
        this.cpf = usuario.cpf;
        this.email = usuario.email;
        this.senha = usuario.senha;
        this.produto=usuario.produto;
    }


}
/* 
    GetUserNome(){
        return this.nome;
    }
    SetUserNome(novo_nome:string){
        this.nome = novo_nome;

    }
    GetUserCpf(){
        return this.cpf;
    }
    SetUserCpf(novo_cpf:string){
        this.cpf = novo_cpf;
    }
    
    GetUserEmail(){
        return this.email;

    }
    SetUserEmail(novo_email:string){
        this.email = novo_email;
    }

    
    GetUserSenha(){
        return this.senha;
    }
    SetUserSenha(nova_senha:string){
        this.senha = nova_senha;
}
*/
