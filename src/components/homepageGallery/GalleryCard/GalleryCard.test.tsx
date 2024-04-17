import "@testing-library/jest-dom";
import { render, waitFor, screen } from "@testing-library/react";
import React from "react";
import GalleryCard from "./GalleryCard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mockGalleryData } from "@/fixtures/pokemonFixtures";

const queryClient = new QueryClient();

describe("GalleryCard Component", () => {
  it("renders card with Pokemon details correctly", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <GalleryCard pokemon={mockGalleryData[0]} />
      </QueryClientProvider>
    );
    await waitFor(() => {
      expect(screen.getByText("bulbasaur")).toBeInTheDocument();
      expect(screen.getByAltText("bulbasaur sprite")).toBeInTheDocument();
    });
  });
});
