import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  form: FormGroup = this.fb.group({
    login: null,
    senha: null,
  });
  mensagemLogin: String = ""

  constructor(
    private router: Router,
    private cursoService: CourseServiceService,
    private fb: FormBuilder
    ) { }

    ngOnInit(): void {
      this.createForm()
    }

    createForm(){
      this.form = this.fb.group({
        login: null,
        password: null,
      })
    }

  login() {
    this.mensagemLogin = ""
    console.log('A função de login foi chamada.', this.form); // Exemplo de mensagem de log
    this.cursoService.login(this.form.value).subscribe({
      next: (res: any) =>{
        if (res != null){
        this.router.navigate(['/home']);
        }else{}
      },error: ()=>{
        console.log("login invalido")
        this.mensagemLogin = "Usuario ou senha incorreto"
      }

    });
  }
}
