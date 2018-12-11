// Modulos de Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Componentes
import { AppComponent } from './app.component';
import { ComparadorFrutasComponent } from './components/comparador-frutas/comparador-frutas.component';
import { LoginComponent } from './components/login/login.component';
import { ListadoFrutasComponent } from './components/listado-frutas/listado-frutas.component';
import { FrutaCardComponent } from './components/fruta-card/fruta-card.component';
import { GestionFrutasComponent } from './components/gestion-frutas/gestion-frutas.component';

// Providers o servicios
import { LoginService } from './providers/login.service';
import { FrutaService } from './providers/fruta.service';

// Guards
import { BackofficeGuard } from './guards/backoffice.guard';
import { BackofficeComponent } from './components/backoffice/backoffice.component';
import { FrutasPipe } from './pipes/frutas.pipe';
import { FrutaBuscarPipe } from './pipes/fruta-buscar.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ComparadorFrutasComponent,
    ListadoFrutasComponent,
    FrutaCardComponent,
    LoginComponent,
    BackofficeComponent,
    GestionFrutasComponent,
    FrutasPipe,
    FrutaBuscarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // ngmodel banana in a box
    HttpClientModule, // Peticiones http asincronas
    ReactiveFormsModule
  ],
  providers: [
    FrutaService,
    LoginService,
    BackofficeGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
