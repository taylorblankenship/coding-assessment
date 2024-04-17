import { mockPokemonDetails } from "@/fixtures/pokemonFixtures";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ImageCard from "./ImageCard";
import "@testing-library/jest-dom";

describe("ImageCard", () => {
  it("renders ImageCard component", () => {
    const { getByAltText } = render(
      <ImageCard pokemonDetails={mockPokemonDetails} />
    );
    const image = getByAltText("pikachu default artwork");
    expect(image).toBeInTheDocument();
  });

  it("toggles between shiny and default image on button click", () => {
    const { getByAltText, getByTitle } = render(
      <ImageCard pokemonDetails={mockPokemonDetails} />
    );
    const shinyButton = getByTitle("Toggle shiny pokemon image");

    fireEvent.click(shinyButton);
    expect(getByAltText("pikachu shiny artwork")).toHaveAttribute(
      "src",
      "shiny_pikachu.png"
    );

    fireEvent.click(shinyButton);
    expect(getByAltText("pikachu default artwork")).toHaveAttribute(
      "src",
      "pikachu.png"
    );
  });
});
