import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { PaginaDeReproducaoDeVideosComponent } from './pages/pagina-de-reproducao-de-videos/pagina-de-reproducao-de-videos.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "home", component: PaginaInicialComponent },
  { path: "video", component: PaginaDeReproducaoDeVideosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
