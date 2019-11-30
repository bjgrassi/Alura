import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  //inputs: ['nomeCurso:nome'] //sendo declarado o decorator, nao precisa disso
})
export class InputPropertyComponent implements OnInit {

  @Input('nome') nomeCurso: string = ''; //melhor forma de declarar

  constructor() { }

  ngOnInit() {
  }

}
