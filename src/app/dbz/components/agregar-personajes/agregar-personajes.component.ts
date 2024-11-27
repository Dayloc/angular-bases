import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { MainPageComponent } from '../../pages/main-page.component';

@Component({
  selector: 'dbz-agregar-personajes',
  templateUrl: './agregar-personajes.component.html',
  styleUrls: ['./agregar-personajes.component.css']
})
export class AgregarPersonajesComponent {
   @Output()
  public onNewPersonaje: EventEmitter <Character>=new EventEmitter();

    public  newPersonaje: Character = {
      name: '',
      power: 0
    }
    emitNewPersonaje(): void{
      if(this.newPersonaje.name.length=== 0)return;

      //esto es lo que envia al padre
      this.onNewPersonaje.emit(this.newPersonaje);
      console.log(this.newPersonaje)
      this.newPersonaje.name='' ;
     this.newPersonaje.power=0;}
}
