<template>
  <div
    class="my-5 d-flex flex-column align-items-center justify-content-center"
  >
    <h2 class="text-center w-100">Compre su juego aquí</h2>
    <small class="form-text text-muted  my-4"
      >Total de Juegos con stock:
      <strong>{{ juegosTotalConStock }}</strong></small
    >

    <table class="container table table-dark">
      <thead>
        <tr>
          <th
            class="text-center"
            scope="col"
            v-for="(item, index) in juegosPropiedades"
            :key="index"
          >
            {{ item }}
          </th>
          <th class="text-center">Venta</th>
        </tr>
      </thead>
      <tbody style="color: rgba(0,0,0, 1); backgroundColor: #fff">
        <tr v-for="(item, index) in juegosConStock" :key="index">
          <td class="text-center">
            {{ item.codigo }}
          </td>
          <td>{{ item.nombre }}</td>
          <td class="text-center">
            {{ item.stock }}
          </td>
          <td class="text-center">$ {{ item.precio }}</td>
          <td class="text-center">
            {{ item.color }}
          </td>
          <td class="text-center">
            {{ item.destacado }}
          </td>
          <td class="text-center">
            <button @click="ventaJuego(index)" class="btn btn-dark btn-sm py-0">
              vender
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "Ventas",
  computed: {
    ...mapState(["juegosPropiedades"]),
    ...mapGetters(["juegosTotalConStock", "juegosConStock"]),
  },
  updated() {
    mapGetters(["juegosConStock"])
  },
  methods: {
    ...mapMutations(["ventaJuego"])
  },
};
</script>
