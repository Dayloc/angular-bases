import { Component, Input } from '@angular/core';
import { Persona } from '../../interfaces/interface-component';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent {

@Input()

public persona: Persona[]=[
  {name:'Pedro',
    age:50

  }
]

}
