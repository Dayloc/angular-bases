import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPagePrueba3Component } from './pages/main-page.components';



@NgModule({
  declarations: [MainPagePrueba3Component],
  exports: [MainPagePrueba3Component],

  imports: [
    CommonModule
  ]
})
export class MainPagePrueba3Module { }
