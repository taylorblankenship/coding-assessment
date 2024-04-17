import { usePokemonDetails, usePokemonSpeciesInfo } from "@/hooks/usePokemon";
import styles from "./Details.module.css";
import StatsCard from "../StatsCard/StatsCard";
import Loading from "@/components/Loading/Loading";
import ImageCard from "../ImageCard/ImageCard";

const Details = ({ pokemonName }: { pokemonName: string }) => {
  const { pokemonDetails, isLoading: isLoadingDetails } =
    usePokemonDetails(pokemonName);
  const { pokemonSpeciesInfo, isLoading: isLoadingSpeciesInfo } =
    usePokemonSpeciesInfo(pokemonName);
  const color = {
    backgroundColor: `var(--${pokemonSpeciesInfo?.color.name}-hex)`,
  };

  return (
    <div style={color} className={styles.detailsContainer}>
      {isLoadingDetails || isLoadingSpeciesInfo ? (
        <Loading />
      ) : (
        <>
          {pokemonDetails && pokemonSpeciesInfo ? (
            <>
              <div className={styles.headerContainer}>
                <div>
                  <h2 className={styles.nameText}>
                    {pokemonName.replace("-", " ")}
                  </h2>
                  <div>
                    {pokemonSpeciesInfo?.flavor_text_entries
                      .find((entry) => entry.language.name === "en")
                      ?.flavor_text.replace("\u000c", " ")}
                  </div>
                </div>
              </div>
              <div className={styles.infoContainer}>
                <ImageCard pokemonDetails={pokemonDetails} />
                <div className={styles.statsContainer}>
                  <StatsCard pokemonDetails={pokemonDetails} />
                </div>
              </div>
            </>
          ) : (
            <div>Something went wrong!</div>
          )}
        </>
      )}
    </div>
  );
};

export default Details;
