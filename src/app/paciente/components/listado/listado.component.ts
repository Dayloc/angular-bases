import { Character } from './../../../dbz/interfaces/character.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Paciente } from '../../interfaces/paciente.interface';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  @Input() public paciente: Paciente[] = [
    {
      name: 'Rober',
      age: 67,
    },
  ];
  @Output()
  public onNewPaciente: EventEmitter <Character>=new EventEmitter();
  public addPaciente:Character={
    name: '',
    power: 0
  }
  public agregarPaciente():void{
    console.log(this.addPaciente);
    if(this.addPaciente.name.length===0)return;
    this.onNewPaciente.emit(this.addPaciente);
    this.addPaciente.name='';
    this.addPaciente.power=0;

  }
}
