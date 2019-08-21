import { Routes } from '@angular/router'
import { GhostComponent } from './components/ghost/ghost.component'
import { VampireComponent } from './components/vampire/vampire.component'

export const routes: Routes = [
    { path: 'spooky', component: GhostComponent},
    { path: 'scary', component: VampireComponent}

]