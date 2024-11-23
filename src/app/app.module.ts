import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { RepasoComponent } from './repaso/repa/repaso.component';
import { AppComponent } from './app.component';
import { Repaso2Component } from './repaso2/repaso2.component';



@NgModule({
  declarations: [
    AppComponent,
    RepasoComponent,
    Repaso2Component

  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
