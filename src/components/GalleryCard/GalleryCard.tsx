import { getPokemonDetails } from "@/services/poke-service";
import { GalleryPokemon, PokemonDetails } from "@/services/types";
import { useEffect, useState } from "react";

const GalleryCard = ({ pokemon }: { pokemon: GalleryPokemon }) => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getPokemonDetails(pokemon.name);
        console.log(res);
        setPokemonDetails(res);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [pokemon]);
  return (
    <div>
      <div>
        {pokemonDetails ? (
          <img
            src={
              pokemonDetails?.sprites.other["official-artwork"].front_default
            }
            alt={pokemon.name}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default GalleryCard;
