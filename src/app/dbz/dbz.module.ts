import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AgregarPersonajesComponent } from './components/agregar-personajes/agregar-personajes.component';




@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AgregarPersonajesComponent,

  ],
  exports:[MainPageComponent],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
