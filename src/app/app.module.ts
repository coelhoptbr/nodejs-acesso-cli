import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IncUsuarioComponent } from './inc-usuario/inc-usuario.component';
import { AltUsuarioComponent } from './alt-usuario/alt-usuario.component';
import { LstUsuarioComponent } from './lst-usuario/lst-usuario.component';

import {routing} from "./app.routing";
import {AutenticacaoService} from "./servico/autenticacao.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UsuarioService} from "./servico/usuario.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IncUsuarioComponent,
    AltUsuarioComponent,
    LstUsuarioComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AutenticacaoService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
