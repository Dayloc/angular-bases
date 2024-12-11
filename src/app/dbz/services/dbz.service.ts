import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {


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

onNewPersonaje(newPersonaje:Character):void{

console.log(newPersonaje);
console.log('AgregarPersonajesComponent')
  this.characters.push(newPersonaje);

}

onDeleteCharacter(index:number):void{

this.characters.splice(index,1);

}



}
