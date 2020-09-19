<template>
  <div>
    <h1>
      <span>Dice 1:</span>
      {{dice1}}
    </h1>
    <h1>
      <span>Dice 2:</span>
      {{dice2}}
    </h1>
    <v-btn @click="rollDie()">Roll dice</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dice1: 0,
      dice2: 0,
    };
  },
  methods: {
    rollDie() {
      const randomNr1 = Math.floor(Math.random() * 6) + 1;
      const randomNr2 = Math.floor(Math.random() * 6) + 1;

      this.dice1 = randomNr1;
      this.dice2 = randomNr2;
    },
  },
};
</script>



<style>
</style>