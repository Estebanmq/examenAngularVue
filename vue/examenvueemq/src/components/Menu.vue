<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
            <a class="navbar-brand" to="/">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">                    
                    <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                </li>
                 <select v-on:change="peliculasGenero()" class="form-select" 
                    name="selectGeneros" v-model="genero">
                        <option v-for="(g, index) in generos" :key="index" :value="g.idGenero">
                            <p>{{g.nombre}}</p>                            
                        </option>
                    </select>   
                    <select class="form-select" 
                    name="selectNacionalidad" v-model="nacionalidad"  v-on:change="peliculasNacionalidad()">
                        <option v-for="(n, index) in nacionalidades" :key="index" :value="n.idNacionalidad">
                            <p>{{n.nombre}}</p>
                            <img :src="n.bandera" alt="bandera"/>
                        </option>
                    </select>             
                </ul>  
                <form v-on:submit.prevent="buscarPeli()" class="d-flex">
                    <input class="form-control me-2" 
                    type="text" placeholder="Titulo" 
                    aria-label="Search" v-model="pelicula">
                    <button class="btn btn-outline-success" 
                    type="submit">Buscar</button>
                </form>  
            </div>
            </div>
        </nav>
    </div>
</template>

<script>
import ServicePeliculas from './../services/ServicePeliculas';

const service = new ServicePeliculas();
export default {
    name : "Menu" , 
    data () {
        return {
            generos : [] , 
            nacionalidades : [] ,
            genero : 0 ,
            nacionalidad : 0 , 
            pelicula : ""
        }
    }, mounted() {
        this.cargarGeneros();
        this.cargarNacionalidades();
    } , methods : {
        cargarGeneros() {
            service.getGeneros().then(res => {
                this.generos = res;
            })
        } , cargarNacionalidades() {            
            service.getNacionalidades().then(res => {
                this.nacionalidades = res;
            })
        } , peliculasGenero() {            
            this.$router.push("/peliculas/" + this.genero + "/g");
        } , peliculasNacionalidad() {
            this.$router.push("/peliculas/" + this.nacionalidad + "/n")
        } , buscarPeli() {
            this.$router.push("/busquedapeliculas/" + this.pelicula)
        }
    }
}
</script>