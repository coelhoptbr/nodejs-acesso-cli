import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";
import { AutenticacaoService } from "../servico/autenticacao.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private autenticacaoService: AutenticacaoService) { }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log("Realizar login de " + this.loginForm.controls.email.value);

    this.autenticacaoService.login(this.loginForm.controls.email.value, this.loginForm.controls.senha.value).subscribe(data => {
      if (data === true) {
        this.router.navigate(['us/lst']);
      }
    });

    this.invalidLogin = true;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

}
