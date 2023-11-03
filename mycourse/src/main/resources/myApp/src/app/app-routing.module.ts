import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: "", redirectTo:"login", pathMatch: 'full'
  },
  {
    path: "login", component:LoginComponent
  },
  {
    path: "home", component:PaginaInicialComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
