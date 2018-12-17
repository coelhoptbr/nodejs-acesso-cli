import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {IncUsuarioComponent} from "./inc-usuario/inc-usuario.component";
import {LstUsuarioComponent} from "./lst-usuario/lst-usuario.component";
import {AltUsuarioComponent} from "./alt-usuario/alt-usuario.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'us/inc', component: IncUsuarioComponent },
  { path: 'us/lst', component: LstUsuarioComponent },
  { path: 'us/alt', component: AltUsuarioComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);