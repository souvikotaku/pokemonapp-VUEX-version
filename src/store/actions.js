import axios from "axios";

export const getPokemons = ({ commit }) => {
  axios
    .get(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
    .then((response) => {
      commit("SET_POKEMONS", response.data.pokemon);
      console.log(response.data.pokemon);
    });
};
