import { Routes, RouterModule, Router } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { BusquedapelisComponent } from './components/busquedapelis/busquedapelis.component';



const appRoutes = [
    { path : "" , component : HomeComponent} , 
    { path : "peliculas/:id/:genenacio" , component : PeliculasComponent } , 
    { path : "busquedapeliculas/:pelicula", component : BusquedapelisComponent }

]

export const appRoutingProviders : any [] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);