import {
  useGalleryMock,
  usePokemonDetailsMock,
} from "@/fixtures/pokemonFixtures";
import "@testing-library/jest-dom";
import { render, waitFor, screen } from "@testing-library/react";
import React from "react";
import Gallery from "./Gallery";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

jest.mock("@/hooks/usePokemon", () => ({
  useGalleryPokemon: useGalleryMock,
  usePokemonDetails: usePokemonDetailsMock,
}));

describe("Gallery Component", () => {
  it("renders gallery correctly", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Gallery />
      </QueryClientProvider>
    );
    await waitFor(() => {
      expect(screen.getByText("bulbasaur")).toBeInTheDocument();
      expect(screen.getByText("charmander")).toBeInTheDocument();
      expect(screen.getByText("squirtle")).toBeInTheDocument();
      expect(screen.getByText("pikachu")).toBeInTheDocument();
    });
  });
});
