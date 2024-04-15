import { Inter } from "next/font/google";
import Details from "@/components/detailsPage/Details/Details";
import { useEffect, useState } from "react";
import router from "next/router";

const inter = Inter({ subsets: ["latin"] }); //todo font

export default function DetailsPage() {
  const [pokemonName, setPokemonName] = useState<string>();
  useEffect(() => {
    const { query } = router;
    if (query.pokemon) {
      setPokemonName(
        Array.isArray(query.pokemon) ? query.pokemon.join() : query.pokemon
      );
    } else {
      //todo create error state
    }
  }, []);

  return (
    <>
      <main className={`${inter.className}`}>
        {pokemonName && <Details pokemonName={pokemonName} />}
      </main>
    </>
  );
}
