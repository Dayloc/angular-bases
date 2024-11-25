import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from '../dbz/pages/main-page.component';
import { MainPagePrueba1Component } from './pages/main-page.component';



@NgModule({
  declarations: [MainPagePrueba1Component],
  exports:[MainPagePrueba1Component],
  imports: [
    CommonModule
  ]
})
export class Prueba1Module { }
