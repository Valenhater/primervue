<template>
  <div>
    <h1 style="color: green">Directivas Vue</h1>
    <label>Nombre: </label>
    <input type="text" v-model="nombre" />
    <br><br>
    <label>Edad: </label>
    <input type="number" v-model="edad" />

    <h1 style="color:red">
        Nombre: {{nombre}}, Edad: {{edad}}
    </h1>
    <h1>
        <!-- El simbolo $ nos permite acceder a ciertos
         elementos de vue en la zona de template por ejemplo 
         podemos acceder a todo el contenido de data() -->
         {{$data}}
    </h1>
  </div>
</template>

<script>
export default {
  name: "DirectivasComponent",
  data() {
    return {
      nombre: "",
      edad: 0,
    };
  },
};
</script>