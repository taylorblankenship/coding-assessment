import { Arimo, Inter } from "next/font/google";
import Details from "@/components/detailsPage/Details/Details";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const arimo = Arimo({ subsets: ["latin"] });

export default function DetailsPage() {
  const router = useRouter();
  const [pokemonName, setPokemonName] = useState<string>();
  useEffect(() => {
    const { query } = router;
    if (query.pokemon) {
      setPokemonName(
        Array.isArray(query.pokemon) ? query.pokemon.join() : query.pokemon
      );
    } else {
      setPokemonName("");
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>
          {pokemonName
            ?.split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </title>
      </Head>
      <main className={`${arimo.className}`}>
        {pokemonName && <Details pokemonName={pokemonName} />}
      </main>
    </>
  );
}
