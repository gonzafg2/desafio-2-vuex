<template>
  <div>
    <header
      class="my-5 d-flex flex-column align-items-center justify-content-center"
    >
      <h1 class="mb-4">{{ titulo }}</h1>
      <h2 class="lead font-italic">{{ subtitulo }}</h2>
    </header>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Inicio",
  data() {
    return {};
  },
  computed: {
    ...mapState(["titulo", "subtitulo"]),
  },
};
</script>
