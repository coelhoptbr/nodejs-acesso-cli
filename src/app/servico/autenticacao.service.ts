import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AutenticacaoService {
  constructor(private http: HttpClient) {
  }

  login(email: string, senha: string) {
    return this.http.post<any>('https://acesso-api.herokuapp.com/acesso/login/', {email: email, senha: senha})
      .pipe(map(logado => {
        if (logado) {
          localStorage.setItem('currentUser', JSON.stringify(email));
          console.log("Fez login de " + email + " e " + JSON.stringify(logado));
          return true;
        }
        return false;
      }));
  }
}