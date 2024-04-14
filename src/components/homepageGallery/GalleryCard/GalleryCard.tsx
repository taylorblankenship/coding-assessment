import { GalleryPokemon } from "@/services/types";
import styles from "./GalleryCard.module.css";
import Link from "next/link";
import { usePokemonDetails } from "@/hooks/usePokemon";

const GalleryCard = ({ pokemon }: { pokemon: GalleryPokemon }) => {
  const { pokemonDetails, isLoading } = usePokemonDetails(pokemon.name);
  return (
    <Link href={{ pathname: "/details", query: { pokemon: pokemon.name } }}>
      <div className={styles.gallery_card}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <img
            src={
              pokemonDetails?.sprites.other["official-artwork"].front_default
            }
            alt={pokemon.name}
          />
        )}
        {pokemon.name}
      </div>
    </Link>
  );
};

export default GalleryCard;
