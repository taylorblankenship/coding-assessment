import { usePokemonDetails, usePokemonSpeciesInfo } from "@/hooks/usePokemon";
import styles from "./Details.module.css";
import StatsCard from "../StatsCard/StatsCard";

const Details = ({ pokemonName }: { pokemonName: string }) => {
  const { pokemonDetails, isLoading: isLoadingDetails } =
    usePokemonDetails(pokemonName);
  const { pokemonSpeciesInfo, isLoading: isLoadingSpeciesInfo } =
    usePokemonSpeciesInfo(pokemonName);
  return (
    <div className={styles.detailsContainer}>
      <h2>{pokemonName}</h2>
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
