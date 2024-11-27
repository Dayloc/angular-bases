import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    CommonModule,
    FormsModule

  ]
})
export class DbzModule { }
