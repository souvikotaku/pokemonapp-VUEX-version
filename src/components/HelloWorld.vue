<template>
  <div class="App">
    <div style="text-align:center">
      <img style="width:70%" src="../assets/pokemon.png" />
      <p style="color:black">Made by Souvik</p>
    </div>
    <br />

    <!-- <button @click='fetchData'>click</button> -->
    <div className="row shapeBox">
      <div
        v-for="pokemon in pokemons"
        v-bind:key="pokemon"
        style="width:20%;padding:6px"
        className="image-container d-flex justify-content-start"
      >
        <!-- <p>{{index}}. {{post.characterName}}</p> -->

        <!-- <h1>name:{{pokemon.name}}</h1> -->
        <img
          class="picbox"
          style="width:100%"
          v-bind:src="pokemon.img"
          alt="No Photo"
        />
        <!-- <div>
          <h5>{{ pokemon.name }}</h5>
        </div>
        <button className="btn btn-primary">press</button> -->
        <div className="overlay  ">
          <h5 style="color:white;font-size:15px">
            Name: {{ pokemon.name || "nil" }}
          </h5>

          <div v-for="poketype in pokemon.type" v-bind:key="poketype">
            <h5 style="color:white;font-size:15px">Type: {{ poketype }}</h5>
          </div>
          <h5 style="color:white;font-size:15px">
            Height: {{ pokemon.height || "nil" }}
          </h5>
          <h5 style="color:white;font-size:15px">
            Weight: {{ pokemon.weight || "nil" }}
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {Card} from '@material-ui/core';

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  //   data() {
  //     return {
  //       query: "",
  //       pokemons: null
  //     };
  //   },

  computed: {
    pokemons() {
      return this.$store.state.pokemons;
    },
  },

  mounted() {
    this.$store.dispatch("getPokemons");
  },

  //   mounted: async function() {
  //     const url = `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`;
  //     const response2 = await fetch(url);
  //     const responseJson2 = await response2.json();
  //     console.log(responseJson2.pokemon);

  //     this.pokemons = responseJson2.pokemon;
  //   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import "../assets/bootstrap.css"; */
@import "./pokemon.css";
</style>
