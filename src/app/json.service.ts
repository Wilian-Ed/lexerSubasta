import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from './Post';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient) { }

  getJson(): any{
    return this.http.get<Post[]>('https://analizadorlexico1.herokuapp.com/api/cadena?cadena=Perez%2010.5%20%25ABC');
  }
}
