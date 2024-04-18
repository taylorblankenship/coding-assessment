import styles from "./ImageCard.module.css";
import { useState } from "react";
import { PokemonDetails } from "@/services/types";

const ImageCard = ({ pokemonDetails }: { pokemonDetails: PokemonDetails }) => {
  const [isShiny, setIsShiny] = useState(false);
  const playCry = () => {
    const cry = new Audio(pokemonDetails?.cries.latest);
    cry.play();
  };

  return (
    <div className={styles.imageContainer}>
      <button
        onClick={() => {
          playCry();
        }}
        className={styles.pokemonImg}
        aria-label="click to play pokemon cry"
      >
        <img
          src={
            isShiny
              ? pokemonDetails?.sprites.other["official-artwork"].front_shiny
              : pokemonDetails?.sprites.other["official-artwork"].front_default
          }
          alt={
            isShiny
              ? `${pokemonDetails.name} shiny artwork`
              : `${pokemonDetails.name} default artwork`
          }
        />
      </button>
      {pokemonDetails?.sprites.other["official-artwork"].front_shiny && (
        <button
          title="Toggle shiny pokemon image"
          className={`${styles.shinyButton} ${isShiny && styles.shinyEnabled}`}
          onClick={() => setIsShiny(!isShiny)}
          aria-label="click to toggle shiny pokemon image"
        >
          <img
            src="\star.png"
            className={isShiny ? styles.shinyEnabled : ""}
            alt="shiny pokemon icon"
          />
        </button>
      )}
    </div>
  );
};

export default ImageCard;
