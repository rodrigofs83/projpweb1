export class Usuario{

    private nome:string;
    private cpf:string;
    private email:string;
    private senha:string;
    constructor(nome:string,cpf:string,email:string,senha:string){
        this.nome= nome;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;



        

    }
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
}