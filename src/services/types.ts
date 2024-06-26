export interface GalleryPokemon {
  name: string;
  url: string;
}

export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: { ability: { name: string } }[];
  held_items: { item: { name: string } }[];
  moves: { move: { name: string } }[];
  types: { type: { name: string } }[];

  //Media
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
  };
  flavor_text_entries: { flavor_text: string; language: { name: string } }[];
}
