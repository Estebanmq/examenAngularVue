<template>
    <div>     
        <div v-if="peliculaDetalles">
            <div class="row">
                <div class="col-md-2"></div>
                    <div class="col-md-8">
                        
                        <div class="card" style="width: 100%;">
                        <img :src="peliculaDetalles.foto" style="width:300px;" class="card-img-top" alt="foto peli">
                            <div class="card-body">
                                <h5 class="card-title">{{peliculaDetalles.titulo}}</h5>
                                <p class="card-text">{{peliculaDetalles.argumento}}</p>                                    
                                <div v-if="generoPelicula">
                                    <h5 class="card-title">GENERO: {{generoPelicula.nombre}}</h5>
                                </div>
                                 <div v-if="nacionalidadPelicula">
                                    <h5 class="card-title">NACIONALIDAD: {{nacionalidadPelicula.nombre}}</h5>
                                </div>
                                <h5 class="mt-2 mb-2 text-warning card-title">Cambiar genero</h5>                                
                                <select v-on:change="cambiarPeliGenero" v-if="generos" class="form-select" 
                                name="selectGenero" v-model="selectGenero">
                                    <option v-for="(g,index ) in generos" :key="index"
                                    :value="g.idGenero">
                                        {{g.nombre}}            
                                    </option>
                                </select> 
                                <button v-on:click="eliminarPeli(peliculaDetalles.idPelicula)" class="m-2 btn btn-danger">
                                    Eliminar
                                </button>
                            </div>
                            <iframe width="560" height="315" 
                            
                            v-bind:src="'https://www.youtube.com/embed/' + peliculaDetalles.enlaceVideo" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>                                      
                    </div>
                <div class="col-md-2"></div>
            </div>
        </div>
    </div>
</template>

<script>
import ServicePeliculas from './../services/ServicePeliculas';

const service  = new ServicePeliculas();
export default {
    name : "Pelicula" , 
    props: ["peliculaDetalles","generoNacionalidad"] ,
    data() {
        return {
            generos : [] ,
            selectGenero : 0,
            generoPelicula : null , 
            nacionalidadPelicula : null
        }
    } , methods : {
        cargarGeneros() {
            service.getGeneros().then(res => {
                this.generos = res;
            });
        } , cambiarPeliGenero() {
            service.putPeliGenero(this.peliculaDetalles.idPelicula, this.selectGenero).then(res => {
                alert("Se ha cambiado correctamente")
                console.log(res);
                this.$emit("cargarPeliculas");    
            })
        } , eliminarPeli(idpeli) {
            if (window.confirm("¿Seguro que quiere eliminarla?")) {
                console.log("Se elimina la peli " + idpeli)
                service.deletePelicula(idpeli).then(res => {
                    console.log(res);
                    this.$emit("cargarPeliculas");    
                });
                
            } else {
                console.log("No se elimina");
            }
        } , cargarGeneroNacionalidad() {
            if (this.generoNacionalidad == "g") {
                service.getGenero(this.peliculaDetalles.idGenero).then(res => {
                    this.generoPelicula = res;
                });
            } else if(this.generoNacionalidad == "n") {
                service.getNacionalidad(this.peliculaDetalles.idNacionalidad).then(res => {
                    this.nacionalidadPelicula = res;
                });
            }
        }
    } , mounted() {
        this.cargarGeneros();

        this.cargarGeneroNacionalidad();
    }
}
</script>