
import { Injectable } from '@angular/core';
import { Produto } from '../model/produto/produto';
//import { HttpClient } from '@angular/common/http';
import { from, map, Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  //URL_Produtos =  'http://localhost:3000/produtos';

 // constructor(private httpClient: HttpClient) { }
colecaoProdutos: AngularFirestoreCollection<Produto>;
NOME_COLECAO = 'produtos';
constructor(private afs: AngularFirestore) {
  this.colecaoProdutos = afs.collection(this.NOME_COLECAO);
}

  lista():Observable<Produto[]>{
    //return this.httpClient.get<Produto[]>(this.URL_Produtos);
      // usando options para idField para mapear o id gerado pelo firestore para o campo id de usuário
    return this.colecaoProdutos.valueChanges({idField: 'id'});
  }

  inserir(produto:Produto): Observable<Produto> {
   // return this.httpClient.post<Produto>(this.URL_Produtos,produto);
    delete produto.id;
    return from(this.colecaoProdutos.add(Object.assign({}, produto)));
  }

remover(id:string):Observable<void>{
//  return this.httpClient.delete(`${this.URL_Produtos}/${id}`)
return from(this.colecaoProdutos.doc(id).delete());

  }
  buscaId(id:string):Observable<Produto>{
   // return this.httpClient.get<Produto>(`${this.URL_Produtos}/${id}`) 
    const doc = this.colecaoProdutos.doc(id).get();
    doc.subscribe(d => console.log(d));
    return doc.pipe(map(document => new Produto(document.id, document.data())));
  }
  atualizar(produto:Produto):Observable<void>{
    //return this.httpClient.put<Produto>(`${this.URL_Produtos}/${produto.id}`,produto) 
    delete produto.id;
    return from(this.colecaoProdutos.doc(produto.id).update(Object.assign({}, produto)));
  
  }
}