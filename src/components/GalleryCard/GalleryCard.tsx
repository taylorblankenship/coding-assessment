import { getPokemonDetails } from "@/services/poke-service";
import { GalleryPokemon, PokemonDetails } from "@/services/types";
import { useEffect, useState } from "react";
import styles from "./GalleryCard.module.css";
import Link from "next/link";

const GalleryCard = ({ pokemon }: { pokemon: GalleryPokemon }) => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getPokemonDetails(pokemon.name);
        setPokemonDetails(res);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [pokemon]);
  return (
    <Link href="/details">
      <div className={styles.gallery_card}>
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
        {pokemon.name}
      </div>
    </Link>
  );
};

export default GalleryCard;
