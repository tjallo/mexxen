<template>
  <div>
    <v-list-item v-for="player in $store.state.players" :key="player">
      <span>{{ player }}</span>
      <v-btn color="red" class="mx-4" @click="removePlayer(player)">Remove</v-btn>
    </v-list-item>
    <v-form @submit="addPlayer(form)">
      <v-text-field v-model="form" label="Name" class="mx-3"></v-text-field>
    </v-form>
    <v-btn class="ma-3" @click="addPlayer(form)" color="primary">Add player</v-btn>
    <v-spacer></v-spacer>
    <v-btn @click="$router.push('game')" class="ma-3" color="green">Start Game</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: "",
    };
  },
  methods: {
    addPlayer(name) {
      this.$store.commit("addPlayer", name);
    },
    getPlayers() {
      console.log(this.$store.state.players);
    },
    removePlayer(name) {
      this.$store.commit("removePlayer", name);
    
    },
  },
};
</script>

<style>
</style>