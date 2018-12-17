import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsuarioService} from "../servico/usuario.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import {Usuario} from "../model/usuario.model";

@Component({
  selector: 'app-alt-usuario',
  templateUrl: './alt-usuario.component.html',
  styleUrls: ['./alt-usuario.component.css']
})
export class AltUsuarioComponent implements OnInit {

  ser: Usuario;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit() {
    let userId = localStorage.getItem("editUserId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['us/lst']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      nome: ['', Validators.required],
      dataNascimento: ['', Validators.required]
    });
    this.usuarioService.getUsuarioPorId(+userId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.usuarioService.alterarUsuario(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['us/lst']);
        },
        error => {
          alert(error);
        });
  }
}
