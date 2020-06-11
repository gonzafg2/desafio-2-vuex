<template>
  <div class="my-5 d-flex flex-column align-items-center justify-content-center">
    <div class="form-group">
      <h2 class="text-center w-100 mb-4">Encuentre su juego aquí</h2>
      <input type="text" v-model="codigo"
        class="form-control" placeholder="Código del juego...">
      <small class="form-text text-muted">Total de Juegos: <strong>{{ juegosTotal }}</strong></small>
      <small class="form-text text-muted">Stock Total: <strong>{{ stockTotales }}</strong></small>
    </div>
    <ListadoBusqueda :codigo="this.codigo" class="my-4" />
  </div>
  <!-- oiasdoiads -->
</template>

<script>
import ListadoBusqueda from "./../components/ListadoBusqueda";
import { mapGetters } from 'vuex';

export default {
  name: "Busquedas",
  components: {
    ListadoBusqueda,
  },
  data() {
    return {
      codigo: ""
    }
  },
  computed: {
    ...mapGetters(["juegosTotal", "stockTotales"])
  },
};
</script>
