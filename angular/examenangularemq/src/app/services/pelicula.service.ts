import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Global } from "../global";

@Injectable()

export class ServicePeliculas {
    constructor(
        private _http : HttpClient
    ) {}


    getNacionalidades() : Observable<any> {
        var request = "api/Nacionalidades"; 
        return this._http.get(Global.urlPeliculas + request);
    }

    getGeneros() : Observable<any> {
        var request = "api/Generos"
        return this._http.get(Global.urlPeliculas + request);
    }

    getPeliculasNacionalidad(id : string)  : Observable<any> {
        var request = "api/Peliculas/PeliculasNacionalidad/" + id;
        return this._http.get(Global.urlPeliculas + request);
    }
 
    getPeliculasGenero(id : string)  : Observable<any> {
        var request = "api/Peliculas/PeliculasGenero/" + id;
        return this._http.get(Global.urlPeliculas + request);
    }

    getPeliculasBusqueda(pelicula : string) : Observable<any> {
        var request = "api/Peliculas/PeliculasTitulo/" + pelicula;
        return this._http.get(Global.urlPeliculas + request);
    }

    putPeliGenero(idPeli : string, idGenero : string) : Observable<any> {
        var request = "api/peliculas/updatepeliculagenero/" + idPeli + "/" + idGenero;
        var header = new HttpHeaders().set("Content-Type","application/json");
        return this._http.put(Global.urlPeliculas + request, {headers : header});
    }
    
    deletePelicula(idPeli : string) : Observable<any>{
        var request = "api/Peliculas/" + idPeli;
        return this._http.delete(Global.urlPeliculas + request);
    }   
    
    getGenero(idgenero:string): Observable<any> {        
        var request = "api/generos/" + idgenero;
        return this._http.get(Global.urlPeliculas + request);
    }

    getNacionalidad(idnacionalidad:string): Observable<any> {       
        var request = "api/nacionalidades/" + idnacionalidad;
        return this._http.get(Global.urlPeliculas + request);
    }
}