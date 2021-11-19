import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pelicula } from 'src/app/models/pelicula';
import { ServicePeliculas } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-busquedapelis',
  templateUrl: './busquedapelis.component.html',
  styleUrls: ['./busquedapelis.component.css']
})
export class BusquedapelisComponent implements OnInit {

  public peliculas! : Array<Pelicula>;

  constructor(
    private _service : ServicePeliculas , 
    private _route : ActivatedRoute , 
  ) { }

  ngOnInit(): void {  
    this._route.params.subscribe((params : Params) => {
      this._service.getPeliculasBusqueda(params['pelicula']).subscribe(res => {
        this.peliculas = res;
      });
    });
  }

}
