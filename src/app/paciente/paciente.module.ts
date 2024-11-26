import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageListadoPacienteComponent } from './pages/listado-page.component';
import { ListadoComponent } from './components/listado/listado.component';
import { EnfermedadesComponent } from './components/enfermedades/enfermedades.component';

@NgModule({
  declarations: [
    MainPageListadoPacienteComponent,
    ListadoComponent,
    EnfermedadesComponent,
  ],
  exports: [MainPageListadoPacienteComponent],
  imports: [CommonModule],
})
export class PacienteModule {}
