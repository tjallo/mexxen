import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    players: [],
  },
  mutations: {
    addPlayer(state, name) {
      state.players.push(name);
    },
    removePlayer(state, name) {
      let index = state.players.indexOf(name);
      state.players.splice(index, 1);
    }

  },
  actions: {
  },
  modules: {
  }
});
