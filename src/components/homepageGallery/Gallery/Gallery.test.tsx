import "@testing-library/jest-dom";
import { render, waitFor, screen } from "@testing-library/react";
import React from "react";
import Gallery from "./Gallery";
import { GalleryPokemon, PokemonDetails } from "@/services/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const pokemonService = require("@/services/poke-service");
jest.mock("@/services/poke-service", () => ({
  getGallery: jest.fn(),
  getPokemonDetails: jest.fn(),
  getPokemonSpeciesInfo: jest.fn(),
}));

const queryClient = new QueryClient();

const mockGalleryData: GalleryPokemon[] = [
  { name: "bulbasaur", url: "test.com/bulbasaur" },
  { name: "charmander", url: "test.com/charmander" },
  { name: "squirtle", url: "test.com/squirtle" },
];

const mockPokemonDetails: PokemonDetails = {
  name: "bulbasaur",
  id: 1,
  height: 20,
  weight: 20,
  cries: {
    legacy: "test/1.ogg",
    latest: "test/2.ogg",
  },
  sprites: {
    front_default: "bulbasaur_sprite.png",
    back_default: "bulbasaur_back_sprite.png",
    other: {
      "official-artwork": {
        front_default: "bulbasaur.png",
        front_shiny: "shiny_bulbasaur.png",
      },
    },
  },
};

describe("Gallery Component", () => {
  beforeEach(() => {
    pokemonService.getGallery.mockResolvedValue(mockGalleryData);
    pokemonService.getPokemonDetails.mockResolvedValue(mockPokemonDetails);
  });
  it("calls the service once on load", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Gallery />
      </QueryClientProvider>
    );
    expect(pokemonService.getGallery).toHaveBeenCalledTimes(1);
  });
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
    });
  });

  // todo implement once error messaging exists
  // it("displays error message when fetching gallery fails", async () => {
  //   const errorMessage = "Failed to fetch gallery data";
  //   pokemonService.getGallery.mockRejectedValue(new Error(errorMessage));
  //   render(<Gallery />);
  //   await waitFor(() => {
  //     expect(screen.getByText(errorMessage)).toBeInTheDocument();
  //   });
  // });
});
