import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid'
@Injectable({providedIn: 'root'})
export class DbzService {


  public characters:Character[]=[
    {
      name: 'Goku',
      power: 10000,
      id: uuid()
    },
    {
      name: 'Vegeta',
      power: 9000,
      id: uuid()
    },
    {
      name: 'Trunks',
      power: 9000,
      id: uuid()
    },
    {
      name: 'Android 19',
      power: 9000,
      id: uuid()
    },
    {
      name: 'Krillin',
      power: 500,
      id: uuid()
    },
    {
      name:'Perseo',
      power:8000,
      id: uuid()
    }

  ];

onNewPersonaje(personaje:Character):void{
  const newPersonaje:Character={id:uuid(),...personaje}

console.log('AgregarPersonajesComponent')
  this.characters.push(newPersonaje);
  console.log(newPersonaje);

}

onDeleteCharacter(index:number):void{

this.characters.splice(index,1);

}



}
