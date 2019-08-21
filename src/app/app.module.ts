import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { routes } from './app.routes'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GhostComponent } from './components/ghost/ghost.component';
import { VampireComponent } from './components/vampire/vampire.component';


@NgModule({
  declarations: [
    AppComponent,
    GhostComponent,
    VampireComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // install Router routes, components, and services
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

