import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CineComponent from "./components/CineComponent.vue";
import MusicaComponent from "./components/MusicaComponent.vue";
import CicloVida from "./components/CicloVida.vue";
import DirectivasComponent from "./components/DirectivasComponent.vue";
import PropiedadConmutada from "./components/PropiedadConmutada.vue";

const myRoutes = [
  {
    path: "/",
    component: HomeComponent,
  },
  {
    path: "/musica",
    component: MusicaComponent,
  },
  {
    path: "/cine",
    component: CineComponent,
  },
  {
    path: "/hooks",
    component: CicloVida,
  },
  {
    path: "/directivas",
    component: DirectivasComponent,
  },
  {
    path: "/conmutadas",
    component: PropiedadConmutada,
  },
];

//Creamos una constante para el historial y para el array de rutas
//Dicha constante sera la que utilicemos dentro del main.js

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

//Por ultimo exportamos la la constante router
export default router;
