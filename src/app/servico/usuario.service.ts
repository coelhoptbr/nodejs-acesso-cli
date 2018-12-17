import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Usuario} from "../model/usuario.model";
import { map } from 'rxjs/operators';

@Injectable()
export class UsuarioService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://acesso-api.herokuapp.com/acesso/usuarios/';

  buscarUsuarios(){
    return this.http.get(this.baseUrl).pipe(
      map((data: any) => {
        console.log("Listar todos os usuários: " +  JSON.stringify(data));

        const listaUsu: Usuario[] = new Array<Usuario>();

        for(const uLoop of data.modelos) {
          const u = new Usuario();
          u.nome = uLoop.nome;
          u.email = uLoop.email;

          var localDate = new Date(uLoop.dataNascimento);
          var localTime = localDate.getTime();
          var localOffset = localDate.getTimezoneOffset() * 60000;
          u.dataNascimento = new Date(localTime + localOffset);
          
          listaUsu.push(u);
        }
        return listaUsu;
      })
    )
  }

  getUsuarioPorId(id: number) {
    return this.http.get<Usuario>(this.baseUrl + id);
  }

  incluirUsuario(usuario: Usuario) {
    return this.http.post(this.baseUrl, usuario);
  }

  alterarUsuario(usuario: Usuario) {
    return this.http.put(this.baseUrl + usuario.id, usuario);
  }

  excluirUsuario(id: number) {
    return this.http.delete(this.baseUrl + id);
  }
}