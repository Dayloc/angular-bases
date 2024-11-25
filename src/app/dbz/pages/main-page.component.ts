import { Component } from '@angular/core';
import { Character, Frutas } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-cpmponent.html'
})

export class MainPageComponent  {

    public characters:Character[]=[
      {
        name: 'Goku',
        power: 10000
      },
      {
        name: 'Vegeta',
        power: 9000
      },
      {
        name: 'Trunks',
        power: 9000
      },
      {
        name: 'Android 19',
        power: 9000
      },
      {
        name: 'Krillin',
        power: 500
      },
      {
        name:'Perseo',
        power:8000
      }

    ];
    public frutas:Frutas[]=[{
      name: 'Manzana',
      color: 'Rojo'
      },
      {name:'cereza',
        color: 'Rojo'
      },
      {
         name:'uva',
        color: 'blanca'
      },
      {
        name:'banana',
        color: 'Amarillo'
      },
      {
        name:'pera',
        color: 'Verde'
      },





  ]


}
