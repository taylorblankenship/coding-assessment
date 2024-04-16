import { PokemonDetails } from "@/services/types";
import styles from "./StatsCard.module.css";
import StyledItem from "../StyledItem/StyledItem";

const StatsCard = ({ pokemonDetails }: { pokemonDetails: PokemonDetails }) => {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.spritesContainer}>
        <img
          src={pokemonDetails.sprites.front_default}
          alt={`${pokemonDetails.name} front sprite`}
        />
        <img
          src={pokemonDetails.sprites.back_default}
          alt={`${pokemonDetails.name} back sprite`}
        />
      </div>
      <div className={styles.statsInfo}>
        <div className={styles.numberedStats}>
          <div>
            <h4>ID</h4> {pokemonDetails.id}
          </div>
          <div>
            {/* todo convert measurements to correct units */}
            <h4>HEIGHT</h4> {pokemonDetails.height}
          </div>
          <div>
            <h4>WEIGHT</h4> {pokemonDetails.weight}
          </div>
        </div>
        <div>
          <h4>ABILITIES</h4>
          <div>
            {pokemonDetails.abilities.map((ability, idx) => (
              <StyledItem key={idx} text={ability.ability.name} />
            ))}
          </div>
        </div>
        <div>
          {/* todo handle empty values */}
          <h4>HELD ITEMS</h4>
          <div>
            {pokemonDetails.held_items.map((item, idx) => (
              <StyledItem key={idx} text={item.item.name} />
            ))}
          </div>
        </div>
        <div>
          <h4>TYPE</h4>
          <div>
            {pokemonDetails.types.map((type, idx) => (
              <StyledItem key={idx} text={type.type.name} isType />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
