import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  fone1: string = 'Fone 1';
  fone2: string = 'Fone 2';
  fone3: string = 'HeadSet 1';
  fone4: string = 'HeadSet 2';

  mostrarLista: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  clicar(): void {
    // deixando o valor da propriedade diferente (!) para ela esconder/mostrar
    this.mostrarLista = !this.mostrarLista;
  }
}
