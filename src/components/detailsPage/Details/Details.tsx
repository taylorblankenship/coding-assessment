import { usePokemonDetails, usePokemonSpeciesInfo } from "@/hooks/usePokemon";
import styles from "./Details.module.css";
import StatsCard from "../StatsCard/StatsCard";
import { useState } from "react";
import Loading from "@/components/Loading/Loading";

const Details = ({ pokemonName }: { pokemonName: string }) => {
  const { pokemonDetails, isLoading: isLoadingDetails } =
    usePokemonDetails(pokemonName);
  const { pokemonSpeciesInfo, isLoading: isLoadingSpeciesInfo } =
    usePokemonSpeciesInfo(pokemonName);
  const [isShiny, setIsShiny] = useState(false);
  const color = {
    backgroundColor: `var(--${pokemonSpeciesInfo?.color.name}-hex)`,
  };
  //todo fix the way it looks when black is the color
  const playCry = () => {
    const cry = new Audio(pokemonDetails?.cries.latest);
    cry.play();
  };
  //todo error state for when pokemon name is empty or invalid

  return (
    <div style={color} className={styles.detailsContainer}>
      <div className={styles.headerContainer}>
        <h2 className={styles.nameText}>{pokemonName}</h2>
        <div>
          {pokemonSpeciesInfo?.flavor_text_entries
            .find((entry) => entry.language.name === "en")
            ?.flavor_text.replace("\u000c", " ")}
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <button
            onClick={() => {
              playCry();
            }}
          >
            <img
              src={
                isShiny
                  ? pokemonDetails?.sprites.other["official-artwork"]
                      .front_shiny
                  : pokemonDetails?.sprites.other["official-artwork"]
                      .front_default
              }
              alt={
                isShiny
                  ? `${pokemonName} shiny artwork`
                  : `${pokemonName} default artwork`
              }
            />
          </button>
          <button
            className={styles.shinyButton}
            onClick={() => setIsShiny(!isShiny)}
          >
            <img src="\star.png" alt="shiny pokemon icon" />
          </button>
        </div>
        <div className={styles.statsContainer}>
          {isLoadingDetails || isLoadingSpeciesInfo ? (
            <Loading />
          ) : (
            pokemonDetails && <StatsCard pokemonDetails={pokemonDetails} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
