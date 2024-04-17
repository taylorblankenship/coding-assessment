// fixtures.js

import {
  GalleryPokemon,
  PokemonDetails,
  PokemonSpeciesInfo,
} from "@/services/types";

export const mockGalleryData: GalleryPokemon[] = [
  { name: "bulbasaur", url: "test.com/bulbasaur" },
  { name: "charmander", url: "test.com/charmander" },
  { name: "squirtle", url: "test.com/squirtle" },
  { name: "pikachu", url: "test.com/pikachu" },
];

export const mockPokemonDetails: PokemonDetails = {
  name: "pikachu",
  id: 1,
  height: 40,
  weight: 60,
  abilities: [
    { ability: { name: "Static" } },
    { ability: { name: "Lightning Rod" } },
  ],
  held_items: [
    { item: { name: "Poke Ball" } },
    { item: { name: "Rare Candy" } },
  ],
  moves: [{ move: { name: "Static" } }, { move: { name: "Lightning Rod" } }],
  types: [{ type: { name: "Electric" } }],
  sprites: {
    front_default: "pikachu_sprite.png",
    back_default: "pikachu_back_sprite.png",
    other: {
      "official-artwork": {
        front_default: "pikachu.png",
        front_shiny: "shiny_pikachu.png",
      },
    },
  },
  cries: {
    legacy: "pikachu_cry_legacy/1.ogg",
    latest: "pikachu_cry_latest/2.ogg",
  },
};

export const mockPokemonSpeciesInfo: PokemonSpeciesInfo = {
  id: 1,
  name: "Pikachu",
  color: { name: "yellow" },
  flavor_text_entries: [
    {
      language: { name: "en" },
      flavor_text: "Pikachu is an electric Pokémon.",
    },
  ],
};

export const usePokemonDetailsMock = jest.fn(() => ({
  pokemonDetails: mockPokemonDetails,
  isLoading: false,
}));

export const usePokemonSpeciesInfoMock = jest.fn(() => ({
  pokemonSpeciesInfo: mockPokemonSpeciesInfo,
  isLoading: false,
}));

export const useGalleryMock = jest.fn(() => ({
  galleryPokemon: mockGalleryData,
  endOfData: false,
  isLoading: false,
  getNextPage: jest.fn(),
}));
