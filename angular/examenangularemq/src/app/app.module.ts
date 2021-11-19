import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ServicePeliculas } from './services/pelicula.service';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BusquedapelisComponent } from './components/busquedapelis/busquedapelis.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PeliculasComponent,
    PeliculaComponent,
    BusquedapelisComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , HttpClientModule
    , routing
  ],
  providers: [
    ServicePeliculas , 
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
