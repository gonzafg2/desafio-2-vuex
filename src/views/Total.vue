<template>
  <div class="my-5 d-flex flex-column align-items-center justify-content-center">
    <h2 class="text-center w-100">Ventas Realizadas</h2>
    <small class="form-text text-muted  my-4"
      >Total de Ventas:
      <strong>$ {{ precioVentaTotal }}</strong></small
    >
    <ListadoVentas />
  </div>
</template>

<script>
import ListadoVentas from "./../components/ListadoVentas";
import { mapGetters } from 'vuex';

export default {
    name: "Total",
    components: {
      ListadoVentas,
    },
    computed: {
      ...mapGetters(["precioVentaTotal"]),
    },
}
</script>
