import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { AppComponent } from './app.component';
import { RepasoModule } from './repaso/repaso.module';
import { DbzModule } from './dbz/dbz.module';
import { Prueba1Module } from './prueba1/prueba1.module';
import { Prueba2Module } from './prueba2/prueba2.module';
import { MainPagePrueba3Module } from './prueba3/prueba3.module';
import { Prueba4Module } from './prueba4/prueba4.module';




@NgModule({
  declarations: [
    AppComponent





  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    RepasoModule,
    DbzModule,
    Prueba1Module,
    Prueba2Module,
    MainPagePrueba3Module,
    Prueba4Module,

   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
