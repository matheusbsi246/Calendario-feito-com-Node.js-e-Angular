import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const API = 'http://localhost:3000/usuarios';

@Injectable({ providedIn: 'root' })

export class LoginService {

  constructor(private http: HttpClient) {}

  autentica() {
    return this.http.get<Object[]>(API , {headers: {'Access-Control-Allow-Origin': '*', 'content-type': 'aplication/json'}});
  }
}
