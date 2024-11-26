import { Component } from '@angular/core';
import { Paciente } from '../interfaces/paciente.interface';

@Component({
  selector: 'main-page-paciente',
  templateUrl: './listado-pages.component.html',
})
export class MainPageListadoPacienteComponent {
  public paciente: Paciente[] = [
    {
      name: 'Pepe',
      age: 34,
    },
    {
      name: 'Pedro',
      age: 23,
    },
    {
      name: 'Rafael',
      age: 45,
    },
  ];
}
