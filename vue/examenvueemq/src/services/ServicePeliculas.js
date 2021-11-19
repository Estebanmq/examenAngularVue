import { Global } from "../Global";
import Axios from "axios";

export default class ServicePeliculas {
    getGeneros() {
        return new Promise(function(resolve)  {
            var request = "api/Generos"; 
            Axios.get(Global.urlPeliculas + request).then(res => {
                resolve(res.data);
            })
        })
    }

    getNacionalidades() {
        return new Promise(function(resolve)  {
            var request = "api/Nacionalidades"; 
            Axios.get(Global.urlPeliculas + request).then(res => {
                resolve(res.data);
            })
        })
    }

    getPeliculasNacionalidad(id) {
        return new Promise(function(resolve) {
            var request = "api/Peliculas/PeliculasNacionalidad/" + id;
            Axios.get(Global.urlPeliculas + request).then(res => {
                resolve(res.data);
            })
        });
    
    }
 
    getPeliculasGenero(id) {
        return new Promise(function(resolve) {
            var request = "api/Peliculas/PeliculasGenero/" + id;
            Axios.get(Global.urlPeliculas + request).then(res => {
                resolve(res.data);
            });
        })
    }

    getPeliculasBusqueda(pelicula)  {
        return new Promise(function(resolve) { 
            var request = "api/Peliculas/PeliculasTitulo/" + pelicula;
            Axios.get(Global.urlPeliculas + request).then(res => {
                resolve(res.data);
            })
        });
    }

    putPeliGenero(idPeli,idGenero) {
        return new Promise(function(resolve) {
            var request = "api/peliculas/updatepeliculagenero/" + idPeli + "/" + idGenero;
            Axios.put(Global.urlPeliculas + request).then(res => {
                resolve(res);
            })
        })
    }
        
    deletePelicula(idPeli) {
        return new Promise(function(resolve) {
            var request = "api/Peliculas/" + idPeli;
            Axios.delete(Global.urlPeliculas + request).then(res => {
                resolve(res);
            });
        });
      
    } 

    getGenero(idgenero) {
        return new Promise(function(resolve) {
            var request = "api/generos/" + idgenero;
            Axios.get(Global.urlPeliculas + request).then(res => {
                resolve(res.data);
            })
        });
    }

    getNacionalidad(idnacionalidad) {
        return new Promise(function(resolve) {
            var request = "api/nacionalidades/" + idnacionalidad;
            Axios.get(Global.urlPeliculas + request).then(res => {
                resolve(res.data);
            })
        });
    }

}