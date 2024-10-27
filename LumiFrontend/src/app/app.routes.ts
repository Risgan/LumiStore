import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';

export const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: InicioComponent},
    {path: 'carrito', component: CarritoComponent},
    {path: '**', redirectTo: 'inicio'}

];
