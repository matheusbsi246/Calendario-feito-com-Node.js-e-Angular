import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuarios: Object[] = [];
  constructor(private loginService: LoginService) {
    this.loginService
      .autentica()
      .subscribe((usuarios) => (this.usuarios = usuarios));
    console.log(this.usuarios);
  }
}
