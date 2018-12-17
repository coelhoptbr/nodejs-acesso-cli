import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UsuarioService} from "../servico/usuario.service";
import {Usuario} from "../model/usuario.model";

@Component({
  selector: 'app-lst-usuario',
  templateUrl: './lst-usuario.component.html',
  styleUrls: ['./lst-usuario.component.css']
})
export class LstUsuarioComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.buscarUsuarios()
      .subscribe( data => {
        this.usuarios = data;
      });
  }

  excluirUsuario(usuario: Usuario): void {
    this.usuarioService.excluirUsuario(usuario.id)
      .subscribe( data => {
        this.usuarios = this.usuarios.filter(u => u !== usuario);
      })
  };

  alterarUsuario(usuario: Usuario): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", usuario.id.toString());
    this.router.navigate(['edit-user']);
  };

  incluirUsuario(): void {
    this.router.navigate(['us-inc']);
  };
}

