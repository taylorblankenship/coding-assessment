import {
  usePokemonDetailsMock,
  usePokemonSpeciesInfoMock,
} from "@/fixtures/pokemonFixtures";
import React from "react";
import { render, waitFor } from "@testing-library/react";
import Details from "./Details";
import "@testing-library/jest-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

jest.mock("@/hooks/usePokemon", () => ({
  usePokemonDetails: usePokemonDetailsMock,
  usePokemonSpeciesInfo: usePokemonSpeciesInfoMock,
}));

describe("Details component", () => {
  test("renders Pokemon details correctly", async () => {
    const { getByText, getByAltText } = render(
      <QueryClientProvider client={queryClient}>
        <Details pokemonName="Pikachu" />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(getByText("Pikachu")).toBeInTheDocument();
      expect(getByText("Pikachu is an electric Pokémon.")).toBeInTheDocument();
      expect(getByAltText("Pikachu default artwork")).toHaveAttribute(
        "src",
        "pikachu.png"
      );
      expect(getByText("ID")).toBeInTheDocument();
      expect(getByText("ABILITIES")).toBeInTheDocument();
    });
  });
});
