import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

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


  @Output()
 public onEventoEmitido: EventEmitter<number> =new EventEmitter();

  onDdeleteCharacter(index:number):void{
    //TODO: Emitir Personaje
    this.onEventoEmitido.emit(index)
    console.log(index)

  }
  constructor(public DbzService:DbzService){

    console.log(DbzService.characters)


  }

}
