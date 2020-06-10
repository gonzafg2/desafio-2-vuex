<template>
  <table class="container table table-dark">
    <thead>
      <tr>
        <th
          class="text-center"
          scope="col"
          v-for="(item, index) in ventasPropiedades"
          :key="index"
        >
          {{ item }}
        </th>
      </tr>
    </thead>
    <tbody v-if="ventas.length === 0" style="backgroundColor: #fff">
        <tr>
            <td style="color: #000" colspan="4" class="text-center py-4">No hay ventas registradas.</td>
        </tr>
    </tbody>
    <tbody v-else style="color: rgba(0,0,0, 1); backgroundColor: #fff">
      <tr v-for="(item, index) in ventas" :key="index">
        <td class="text-center">
          {{ item.codigo }}
        </td>
        <td>
          {{ item.nombre }}
        </td>
        <td class="text-center">$ {{ item.precio.toLocaleString('es-CL') }}</td>
        <td class="text-center">
          {{ item.cantidad }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "ListadoVentas",
  computed: {
    ...mapState(["ventasPropiedades", "ventas"]),
    ...mapGetters(["ventasTotales"]),
  },
};
</script>
