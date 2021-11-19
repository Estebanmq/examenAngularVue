import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Nacionalidad } from 'src/app/models/nacionalidad';
import { ServicePeliculas } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild("cajaBusqueda") cajaBusqueda! : ElementRef;
  @ViewChild("selectGenero") selectGenero! : ElementRef;
  @ViewChild("selectNacionalidad") selectNacionalidad! : ElementRef;
  public nacionalidades! : Array<Nacionalidad>;
  public generos! : Array<any>;

  constructor(
    private _service : ServicePeliculas ,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.cargarNacionalidades();
    this.cargarGeneros();
  }

  cargarNacionalidades (){
    this._service.getNacionalidades().subscribe(res => {
      this.nacionalidades = res;
      for(var i = 0 ; i< this.nacionalidades.length; i++) {
        console.log(this.nacionalidades[i].bandera)
      }
    });
  }

  cargarGeneros () {
    this._service.getGeneros().subscribe(res => {
      this.generos = res;
    });
  }

  peliculasNacionalidad() {    
    this._router.navigate(["/peliculas", this.selectNacionalidad.nativeElement.value, "n"])
  }

  peliculasGenero() {    
    this._router.navigate(["/peliculas", this.selectGenero.nativeElement.value, "g"])
  }

  buscarPeliculas() {
    this._router.navigate(['busquedapeliculas',this.cajaBusqueda.nativeElement.value]);
  }

}
