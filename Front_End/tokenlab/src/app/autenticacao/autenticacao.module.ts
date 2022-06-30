import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Autenticacao {
  constructor(private httpClient: HttpClient) {}

  autenticar(): Observable<Object> {
    return this.httpClient.get('http://localhost:3000/usuarios');
  }
}
