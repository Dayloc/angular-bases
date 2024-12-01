import { ListadoComponent } from './../components/listado/listado.component';
import { Component } from '@angular/core';
import { Paciente } from '../interfaces/paciente.interface';
import { Character } from 'src/app/dbz/interfaces/character.interface';

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
  onNewPaciente(Paciente:Character):void{
    console.log('ListadoComponent')
    //console.log({Paciente});

  }
}
