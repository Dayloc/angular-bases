import { Component, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  //Esto es un input que me lo va a mandar desde el padre, es un arreglo de objetos Character
  @Input()
  //Esto me lo mandaria por defecto

  public characterList: Character[]=[
    {name: 'Goku', power: 9001},
    {name: 'Vegeta', power: 1000},
    {name: 'Gohan', power: 1000},

  ];
  @Input()
  @Output()

  onDdeleteCharacter(index:number):void{
    //TODO: Emitir Personaje
    console.log(index)
    for(let i=0;i<this.characterList.length;i++){
      if(i===index){
        this.characterList.splice(i,1)
        break;
      }

    }

  }

}
