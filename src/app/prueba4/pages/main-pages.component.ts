import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../interfaces/interface-component';

@Component({
  selector: 'preuba4-main-page',
  templateUrl: './main-pages.component.html'
})

export class MainPagesPrueba4Component {


  public persona:Persona[]=[
    {
    name: 'Bob Smith',
    age: 20
    },
    {
    name: 'Jane Doe',
    age: 22
    },
    {
    name: 'Alice Johnson',
    age: 25
    },
    {
    name: 'John Doe',
    age: 30
    },
    {
    name: 'Mary Smith',
    age: 35
    }
]

}
