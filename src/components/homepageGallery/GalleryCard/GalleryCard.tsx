import { GalleryPokemon } from "@/services/types";
import styles from "./GalleryCard.module.css";
import Link from "next/link";
import { usePokemonDetails } from "@/hooks/usePokemon";
import Loading from "@/components/Loading/Loading";

const GalleryCard = ({ pokemon }: { pokemon: GalleryPokemon }) => {
  const { pokemonDetails, isLoading } = usePokemonDetails(pokemon.name);
  return (
    <Link href={{ pathname: "/details", query: { pokemon: pokemon.name } }}>
      <div className={styles.gallery_card}>
        {isLoading ? (
          <Loading />
        ) : (
          <img
            src={pokemonDetails?.sprites.front_default}
            alt={pokemon.name + " sprite"}
          />
        )}
        {pokemon.name.replace("-", " ")}
      </div>
    </Link>
  );
};

export default GalleryCard;
