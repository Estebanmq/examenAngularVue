import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Peliculas from './components/Peliculas.vue';
import Busqueda from './components/Busqueda.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path : "/" , component : Home } ,
  { path : "/peliculas/:id/:genenacio" , component : Peliculas } , 
  { path : "/busquedapeliculas/:pelicula", component : Busqueda }
]

const router = new VueRouter({
  routes , 
  mode : "history"
});


new Vue({
  router ,
  render: h => h(App),
}).$mount('#app')
