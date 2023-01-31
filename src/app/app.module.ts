import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CicloVidaComponent } from './ciclo-vida/ciclo-vida.component';

@NgModule({
  declarations: [
    AppComponent,
    CicloVidaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
