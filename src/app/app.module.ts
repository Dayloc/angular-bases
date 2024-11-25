import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { AppComponent } from './app.component';
import { RepasoModule } from './repaso/repaso.module';
import { DbzModule } from './dbz/dbz.module';



@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    RepasoModule,
    DbzModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
