import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPagesPrueba4Component } from './pages/main-pages.component';
import { ListPersonComponent } from './components/list-person/list-person.component';




@NgModule({
  declarations: [
    MainPagesPrueba4Component,
   ListPersonComponent],
  exports:[MainPagesPrueba4Component],
  imports: [
    CommonModule
  ]
})
export class Prueba4Module { }
