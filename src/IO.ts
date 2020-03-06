import axios from "axios";
import { randomIntegerBetween } from "./utils";

/**
 * axios instance linked to the pokeapi
 */
export const pokeapi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/"
});

/**
 * fetch a random pokemon from the first generation
 * @returns a promise of a pokemon
 */
export const getRandomPokemon = () => {
  return pokeapi
    .get(`pokemon/${randomIntegerBetween(1, 151)}`)
    .then(response => response.data);
};
