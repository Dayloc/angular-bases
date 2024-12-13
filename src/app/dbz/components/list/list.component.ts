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
 public onDelete: EventEmitter<string> =new EventEmitter();
 constructor(public DbzService:DbzService){

  console.log(DbzService.characters)


}
  onDdeleteCharacter(id:string):void{
    //TODO: Emitir id del  Personaje
    this.onDelete.emit(id)
    console.log(id)

  }



}
