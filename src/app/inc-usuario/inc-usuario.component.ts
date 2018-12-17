import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsuarioService} from "../servico/usuario.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inc-usuario',
  templateUrl: './inc-usuario.component.html',
  styleUrls: ['./inc-usuario.component.css']
})
export class IncUsuarioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private usuarioService: UsuarioService) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      nome: ['', Validators.required],
      dataNascimento: ['', Validators.required]
    });

  }

  onSubmit() {
    this.usuarioService.incluirUsuario(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['us/inc']);
      });
  }

}
