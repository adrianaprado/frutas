import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ComparadorFrutasComponent } from './components/comparador-frutas/comparador-frutas.component';
import { ListadoFrutasComponent } from './components/listado-frutas/listado-frutas.component';
import { BackofficeComponent } from './components/backoffice/backoffice.component';
import { BackofficeGuard } from './guards/backoffice.guard';

const routes: Routes = [
  {path: 'home', component: ComparadorFrutasComponent},
  {path: 'listado-frutas', component: ListadoFrutasComponent},
  {path: 'comparador-frutas', component: ComparadorFrutasComponent},
  {path: 'privado', component: BackofficeComponent, canActivate: [BackofficeGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
