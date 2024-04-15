import { PokemonDetails } from "@/services/types";

const StatsCard = ({ pokemonDetails }: { pokemonDetails: PokemonDetails }) => {
  console.log(pokemonDetails);
  return (
    <>
      <img
        src={pokemonDetails.sprites.front_default}
        alt={`${pokemonDetails.name} front sprite`}
      />
      <img
        src={pokemonDetails.sprites.back_default}
        alt={`${pokemonDetails.name} back sprite`}
      />
      <div>ID: {pokemonDetails.id}</div>
      <div>HEIGHT: {pokemonDetails.height}</div>
      <div>WEIGHT: {pokemonDetails.weight}</div>
      <div>ABILITIES: {pokemonDetails.abilities.toString()}</div>
      <div>
        HELD ITEMS:
        {pokemonDetails.held_iems
          ? pokemonDetails.held_iems.toString()
          : "None"}
      </div>
      <div>MOVES: {pokemonDetails.moves.toString()}</div>
      <div>TYPES: {pokemonDetails.types.toString()}</div>
    </>
  );
};

export default StatsCard;
