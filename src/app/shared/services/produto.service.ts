import { PRODUTOS } from 'src/app/shared/model/PRODUTOS';
import { Injectable } from '@angular/core';
import { Produto } from '../model/produto/produto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  URL_Produtos =  'http://localhost:3000/produtos';

  constructor(private httpClient: HttpClient) { 
    
  }
  lista():Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(this.URL_Produtos);

  }

  inserir(produto:Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(this.URL_Produtos,produto);
  }
remover(id:number):Observable<object>{
  return this.httpClient.delete(`${this.URL_Produtos}/${id}`)


  }
  buscaId(id:number):Observable<Produto>{
    return this.httpClient.get<Produto>(`${this.URL_Produtos}/${id}`)    
  }
  atualizar(produto:Produto):Observable<Produto>{
    return this.httpClient.put<Produto>(`${this.URL_Produtos}/${produto.id}`,produto) 
  }
}
