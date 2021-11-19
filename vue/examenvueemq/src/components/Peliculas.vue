<template>
    <div>                         
        <div v-if="peliculas.length > 0">               
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th>PELICULA</th>
                        <th>DETALLES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(p,index) in peliculas" :key="index">
                        <th>{{p.titulo}}</th>
                        <th>
                            <button v-on:click="cargarPelicula(index)" class="btn btn-danger">
                                Detalles
                            </button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            <h1>Loading...</h1>
        </div>

        <div v-if="peliculaDetallesMostrar">            
            <Pelicula :peliculaDetalles="peliculaDetalles"
            :generoNacionalidad="generoNacionalidad"
            v-on:cargarPeliculas="cargarPeliculas" />
        </div>

    </div>
</template>
<script>
import ServicePeliculas from './../services/ServicePeliculas';
import Pelicula from './Pelicula.vue';

const service  = new ServicePeliculas();
export default {
    name : "Peliculas" , 
    components : {
        Pelicula
    } , 
    data() {
        return {
            peliculas : [] , 
            peliculaDetalles : null , 
            peliculaDetallesMostrar : false , 
            generoNacionalidad : ""
        }
    } , mounted() {
        this.cargarPeliculas();
    } , methods : {
        cargarPeliculas() {
            this.peliculaDetallesMostrar = false;
            this.peliculas = [];
            if (this.$route.params.genenacio == "g") {
                this.generoNacionalidad = "g";
                service.getPeliculasGenero(this.$route.params.id).then(res => {
                    this.peliculas = res;
                });
            } else if (this.$route.params.genenacio == "n") {
                this.generoNacionalidad = "n";
                service.getPeliculasNacionalidad(this.$route.params.id).then(res => {
                    this.peliculas = res;
                });
            }
        } , cargarPelicula(index) {
            this.peliculaDetallesMostrar = true;
            this.peliculaDetalles = this.peliculas[index];
        }
    } , watch: {
        '$route.params.id'(nextVal, prevVal){
            if (nextVal != prevVal){
                this.cargarPeliculas();            
            }
        } , '$route.params.genenacio'(nextVal, prevVal){
            if (nextVal != prevVal){
                this.cargarPeliculas();            
            }
        }
    }

}
</script>