import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  getList(): any {
    return this.http.get<Data[]>('https://analizadorlexico1.herokuapp.com/api/table');
  }

  lexer(texto: string): any{
    return this.http.post<any>('https://analizadorlexico1.herokuapp.com/api/add', {cadena: texto});
  }
}
