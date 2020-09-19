import { create } from 'core-js/fn/object';
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

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
  },
  plugins: [createPersistedState()],
});
