import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageListadoPacienteComponent } from './pages/listado-page.component';
import { FormsModule } from '@angular/forms';
import { ListadoComponent } from './components/listado/listado.component';



@NgModule({
  declarations: [
            MainPageListadoPacienteComponent,
            ListadoComponent
  ],

  exports:[MainPageListadoPacienteComponent],

  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PacienteModule { }
