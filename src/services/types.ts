export interface GalleryPokemon {
  name: string;
  url: string;
}

export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    back_default: string;
    other: {
      "official-artwork": { front_default: string; front_shiny: string };
    };
  };
  cries: {
    latest: string;
    legacy: string;
  };
}

export interface PokemonSpeciesInfo {
  id: number;
  name: string;
  color: {
    name: string;
    url: string;
  };
  flavor_text_entries: { flavor_text: string }[];
}
