import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  // nome: string = '';
  email: string = '';
  senha: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  login(): void {
    console.log(`Email: ${this.email} - Senha: ${this.senha}`)
  }

}
