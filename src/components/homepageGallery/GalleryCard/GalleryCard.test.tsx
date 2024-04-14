import "@testing-library/jest-dom";
import { render, waitFor, screen } from "@testing-library/react";
import React from "react";
import { GalleryPokemon, PokemonDetails } from "@/services/types";
import GalleryCard from "./GalleryCard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const pokemonService = require("@/services/poke-service");
jest.mock("@/services/poke-service", () => ({
  getGallery: jest.fn(),
  getPokemonDetails: jest.fn(),
  getPokemonSpeciesInfo: jest.fn(),
}));

const queryClient = new QueryClient();

const mockPokemon: GalleryPokemon = {
  name: "bulbasaur",
  url: "test.com/bulbasaur",
};

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

describe("GalleryCard Component", () => {
  beforeEach(() => {
    pokemonService.getGallery.mockResolvedValue(mockPokemon);
    pokemonService.getPokemonDetails.mockResolvedValue(mockPokemonDetails);
  });

  it("renders card with Pokemon details correctly", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <GalleryCard pokemon={mockPokemon} />
      </QueryClientProvider>
    );
    await waitFor(() => {
      expect(screen.getByText("bulbasaur")).toBeInTheDocument();
      expect(screen.getByAltText("bulbasaur")).toBeInTheDocument();
    });
  });

  //   it("renders loading message while fetching Pokemon details", async () => {
  //     render(
  //       <QueryClientProvider client={queryClient}>
  //         <GalleryCard pokemon={mockPokemon} />
  //       </QueryClientProvider>
  //     );
  //     expect(screen.getByText("Loading...")).toBeInTheDocument();
  //     pokemonService.getPokemonDetails.mockResolvedValue(mockPokemonDetails);
  //     await waitFor(() => {
  //       expect(screen.queryByText("Loading...")).toBeNull();
  //     });
  //   });

  //todo implement once error handling exists
  //   it("handles error when fetching Pokemon details fails", async () => {
  //     const errorMessage = "Failed to fetch Pokemon details";
  //     // Mock getPokemonDetails to reject with an error
  //     getPokemonDetails.mockRejectedValueOnce(new Error(errorMessage));
  //     render(<GalleryCard pokemon={mockPokemon} />);
  //     await waitFor(() => {
  //       expect(screen.getByText(errorMessage)).toBeInTheDocument();
  //     });
  //   });
});
