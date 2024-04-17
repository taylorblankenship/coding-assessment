import axios from "axios";
import { GalleryPokemon, PokemonDetails, PokemonSpeciesInfo } from "./types";

export const getGallery = async (): Promise<GalleryPokemon[]> => {
  try {
    //1302
    //1205
    //todo figure out data issue
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=1025"
    );
    return res.data.results;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error("something went wrong with getting pokemon gallery data");
    }
  }
};

export const getPokemonSpeciesInfo = async (
  name: string
): Promise<PokemonSpeciesInfo> => {
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${name}`
    );
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error(
        "something went wrong with getting pokemon species details"
      );
    }
  }
};

export const getPokemonDetails = async (
  name: string
): Promise<PokemonDetails> => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error("something went wrong with getting pokemon details");
    }
  }
};
