<template>
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
      </tr>
    </thead>
    <tbody style="color: rgba(0,0,0, 0.85)">
      <tr v-for="(item, index) in buscador" :key="index">
        <td class="text-center" :style="{ backgroundColor: item.color }">
          {{ item.codigo }}
        </td>
        <td :style="{ backgroundColor: item.color }">{{ item.nombre }}</td>
        <td class="text-center" :style="{ backgroundColor: item.color }">
          {{ item.stock }}
        </td>
        <td class="text-center" :style="{ backgroundColor: item.color }">
          $ {{ item.precio.toLocaleString('es-CL') }}
        </td>
        <td class="text-center" :style="{ backgroundColor: item.color }">
          {{ item.color }}
        </td>
        <td class="text-center" :style="{ backgroundColor: item.color }">
          {{ item.destacado }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ListadoBusqueda",
  props: {
    codigo: {
      type: String,
    },
  },
  computed: {
    ...mapState(["juegosPropiedades"]),
    buscador() {
      return this.codigo == ""
        ? this.$store.getters.juegosConStock
        : this.$store.getters.juegoBuscado(this.codigo);
    },
  },
};
</script>
