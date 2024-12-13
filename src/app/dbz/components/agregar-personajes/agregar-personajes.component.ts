import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { MainPageComponent } from '../../pages/main-page.component';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'dbz-agregar-personajes',
  templateUrl: './agregar-personajes.component.html',
  styleUrls: ['./agregar-personajes.component.css']
})
export class AgregarPersonajesComponent {
   @Output()
  public onNewCharacter: EventEmitter <Character>=new EventEmitter();

    public  newCharacter: Character = {
      name: '',
      power: 0,
      id:uuid()
    }
    emitNewCharacter(): void{
      if(this.newCharacter.name.length=== 0)return;

      //esto es lo que envia al padre
      this.onNewCharacter.emit({...this.newCharacter});
      console.log(this.newCharacter)
      this.newCharacter.name='' ;
     this.newCharacter.power=0;}
}
