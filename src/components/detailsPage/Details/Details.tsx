import { usePokemonDetails, usePokemonSpeciesInfo } from "@/hooks/usePokemon";
import styles from "./Details.module.css";
import StatsCard from "../StatsCard/StatsCard";
import { useState } from "react";

const Details = ({ pokemonName }: { pokemonName: string }) => {
  const { pokemonDetails, isLoading: isLoadingDetails } =
    usePokemonDetails(pokemonName);
  const { pokemonSpeciesInfo, isLoading: isLoadingSpeciesInfo } =
    usePokemonSpeciesInfo(pokemonName);
  const [isShiny, setIsShiny] = useState(false);
  return (
    <div className={styles.detailsContainer}>
      <h2>{pokemonName}</h2>
      <img
        src={
          isShiny
            ? pokemonDetails?.sprites.other["official-artwork"].front_shiny
            : pokemonDetails?.sprites.other["official-artwork"].front_default
        }
        alt={
          isShiny
            ? `${pokemonName} shiny artwork`
            : `${pokemonName} default artwork`
        }
      />
      <button onClick={() => setIsShiny(!isShiny)}>Is Shiny Toggle</button>
      {isLoadingDetails || isLoadingSpeciesInfo ? (
        <>
          <div>Loading</div>
        </>
      ) : (
        pokemonDetails && <StatsCard pokemonDetails={pokemonDetails} />
      )}
    </div>
  );
};

export default Details;
