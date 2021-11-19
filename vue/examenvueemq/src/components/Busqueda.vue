<template>
    <div>    
        <h1>PELICULAS</h1>    
        <div v-if="peliculas">               
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th>PELICULA</th>
                        <th>FOTO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(p,index) in peliculas" :key="index">
                        <th>{{p.titulo}}</th>
                        <th>
                            <img :src="p.foto" alt="peli foto" style="width: 100px;">
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            <h1>Loading...</h1>
        </div>
    </div>
</template>
<script>
import ServicePeliculas from './../services/ServicePeliculas';

const service  = new ServicePeliculas();
export default {
    name : "Peliculas" , 
    data() {
        return {
            peliculas : [] , 
        }
    } , mounted() {
        console.log("pelis")
        this.cargarPeliculas();
    } , methods : {
        cargarPeliculas() {
            service.getPeliculasBusqueda(this.$route.params.pelicula).then(res =>{
                this.peliculas = res;
            });
        }
    } , watch : {
        '$route.params.pelicula'(nextVal, prevVal){
            if (nextVal != prevVal){
                console.log("cambia")
                this.cargarPeliculas();
            }
        }
    }

}
</script>