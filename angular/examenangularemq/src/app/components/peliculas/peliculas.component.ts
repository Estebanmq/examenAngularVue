import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pelicula } from 'src/app/models/pelicula';
import { ServicePeliculas } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public peliculas! : Array<Pelicula>;
  public peliculaDetalles! : Pelicula;
  public peliculaDetallesMostrar : boolean;
  public generoNacionalidad! : string;

  constructor(
    private _route : ActivatedRoute ,
    private _service : ServicePeliculas
  ) { 
    this.peliculaDetallesMostrar = false;
  } 

  ngOnInit(): void {
   this.cargarPelis();
  }

  cargarPelicula(index : number) {
    this.peliculaDetallesMostrar = true;
    this.peliculaDetalles = this.peliculas[index];
  }

  cargarPelis() {
    console.log("cargo pelis")
   
    this._route.params.subscribe((params : Params) => {
      if (params['genenacio'] == "g") {
          this._service.getPeliculasGenero(params['id']).subscribe(res => {
            this.peliculaDetallesMostrar = false            
            this.generoNacionalidad = "g";
            this.peliculas = res;
          });
      } else if (params['genenacio'] == "n") {
          this._service.getPeliculasNacionalidad(params['id']).subscribe(res => {            
            this.peliculaDetallesMostrar = false
            this.generoNacionalidad = "n";
            this.peliculas = res;
          });
      }
    });
  }


}
