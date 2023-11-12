import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router) { }

  login() {
    console.log('A função de login foi chamada.'); // Exemplo de mensagem de log
    this.router.navigate(['/home']);

    //location.replace(document.baseURI + '/home')
    //this.router.navigate(['PaginaInicialComponent']);
  }
}
