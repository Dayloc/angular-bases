import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageListadoPacienteComponent } from './pages/listado-page.component';



@NgModule({
  declarations: [
  MainPageListadoPacienteComponent

  ],
  exports:[MainPageListadoPacienteComponent],
  imports: [
    CommonModule
  ]
})
export class PacienteModule { }
