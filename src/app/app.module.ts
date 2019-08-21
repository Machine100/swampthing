import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GhostComponent } from './components/ghost/ghost.component';
import { VampireComponent } from './vampire/vampire.component';

@NgModule({
  declarations: [
    AppComponent,
    GhostComponent,
    VampireComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
