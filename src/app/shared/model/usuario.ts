export class Usuario{

    private email:string;
    private senha:string;
    private nome:string ;
    private cpf:string;
    constructor(email:string,senha:string,nome:string,cpf:string){
        this.email = email;
        this.senha = senha;
        this.nome = nome;
        this.cpf = cpf;

    }
    GetNome(){
        return this.nome;
    }
    SetNome(novo_nome:string){
        this.nome = novo_nome;

    }
    GetCpf(){
        return this.cpf;
    }
    SetCpf(novo_cpf:string){
        this.cpf = novo_cpf;
    }
    GetEmail(){
        return this.email;

    }
    SetEmail(novo_email:string){
        this.email = novo_email;
    }
    GetSenha(){
        return this.senha;
    }
    SetSenha(nova_senha:string){
        this.senha = nova_senha;

    }
}