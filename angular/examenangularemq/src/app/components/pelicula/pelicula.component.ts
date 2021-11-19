import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from 'src/app/models/genero';
import { Pelicula } from 'src/app/models/pelicula';
import { ServicePeliculas } from 'src/app/services/pelicula.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Nacionalidad } from 'src/app/models/nacionalidad';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() peliculaDetalles! : Pelicula;
  public generos! : Array<Genero>;
  @ViewChild("selectGenero") selectGenero! : ElementRef;
  @Output() cargarPelis: EventEmitter<any> = new EventEmitter();
  @Input() generoNacionalidad! : string  ;
  public genero! : Genero;
  public nacionalidad! : Nacionalidad

  constructor(
    private _service : ServicePeliculas ,    
    private _sanitizer: DomSanitizer

  ) { }

  ngOnInit(): void {
    this.cargarGeneros();
    this.cargarGeneroNacionalidad();
    this.getVideoIframe(this.peliculaDetalles.enlaceVideo);
  }

  cargarGeneroNacionalidad() {
    if (this.generoNacionalidad == "g") {
      var idGenero = this.peliculaDetalles.idGenero.toString();
        this._service.getGenero(idGenero).subscribe(res => {
          this.genero = res;
        })
    } else if(this.generoNacionalidad == "n") {
      var idNacionalidad = this.peliculaDetalles.idNacionalidad.toString()
       this._service.getNacionalidad(idNacionalidad).subscribe( res => {
         this.nacionalidad = res;
         console.log("Hay nacionalid")
       })
    }
}

  cargarGeneros () {
    this._service.getGeneros().subscribe(res => {
      this.generos = res;
    });
  }

  cambiarPeliGenero() {
    var idpeli = this.peliculaDetalles.idPelicula.toString();
      this._service.putPeliGenero(
        idpeli,
        this.selectGenero.nativeElement.value).subscribe(res => {
          alert("Se ha cambiado correctamente")          
          this.cargarPelis.emit();
      })
  }

  eliminarPeli(idpeli : number) {
    if (window.confirm("¿Seguro que quiere eliminarla?")) {
      console.log("Se elimina la peli " + idpeli)
      alert("Se ha eliminado correctamete")
      var idPeliString = this.peliculaDetalles.idPelicula.toString();
      this._service.deletePelicula(idPeliString).subscribe(res => {
        this.cargarPelis.emit();
      });
    } else {
      console.log("No se elimina")
    }
  }

  getVideoIframe(url:string) {
    var video, results;

    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
}

}
