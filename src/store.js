import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    titulo: "32bits",
    subtitulo: "Juegos de PC y Consolas",
    juegosPropiedades: [
      "Código",
      "Nombre",
      "Stock",
      "Precio",
      "Color",
      "Destacado",
    ],
    juegos: [
      {
        codigo: "0001",
        nombre: "Sekiro",
        stock: 100,
        precio: 30000,
        color: "red",
        destacado: true,
      },
      {
        codigo: "0002",
        nombre: "Fifa 21",
        stock: 100,
        precio: 25000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "0003",
        nombre: "Gears of War 4",
        stock: 100,
        precio: 15000,
        color: "green",
        destacado: true,
      },
      {
        codigo: "0004",
        nombre: "Mario Tennis Aces",
        stock: 100,
        precio: 35000,
        color: "yellow",
        destacado: false,
      },
      {
        codigo: "0005",
        nombre: "Bloodborne",
        stock: 100,
        precio: 10000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "0006",
        nombre: "Forza Horizon 4",
        stock: 100,
        precio: 20000,
        color: "red",
        destacado: true,
      },
    ],
  },
  getters: {
    // Retorna la cantidad de juegos totales.
    juegosTotal(state) {
      return state.juegos.length;
    },
    // Retorna la cantidad de juegos totales con stock > 0.
    juegosTotalConStock(state, getters) {
      return getters.juegosConStock.length;
    },
    // Retorna el stock total, considerando todos los juegos.
    stockTotales(state) {
      let total = null;
      for (let juego of state.juegos) {
        total += juego.stock;
      }
      return total;
    },
    // Retorna el listado de juegos con stock > 0.
    juegosConStock(state) {
      const juegoStock = state.juegos.filter((fil) => fil.stock > 0);
      return juegoStock;
    },
    // Retorna el juego buscado por código.
    juegoBuscado(state, getters) {
      const juego = (codigo) =>
        getters.juegosConStock.filter((fil) => fil.codigo == codigo);
      return juego;
    },
  },
  mutations: {
    ventaJuego(state, id ) {
      setTimeout(function restarStock() {
        let stockActual = state.juegos[id].stock;
        let stockVenta = 1;
        let stockRestante = stockActual - stockVenta;
        state.juegos[id].stock = stockRestante;
      }, 2000);
    },
  },
  actions: {},
});

export default store;
