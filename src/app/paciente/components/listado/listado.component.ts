import { Component, Input } from '@angular/core';
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
}
