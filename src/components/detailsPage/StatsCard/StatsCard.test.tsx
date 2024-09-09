import { mockPokemonDetails } from "@/fixtures/pokemonFixtures";
import React from "react";
import { render } from "@testing-library/react";
import StatsCard from "./StatsCard";
import "@testing-library/jest-dom";

describe("StatsCard component", () => {
  test("renders Pokemon details correctly", () => {
    const { getByText, getByAltText } = render(
      <StatsCard pokemonDetails={mockPokemonDetails} />
    );

    expect(getByText("ID")).toBeInTheDocument();
    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("HEIGHT")).toBeInTheDocument();
    expect(getByText("4m")).toBeInTheDocument();
    expect(getByText("WEIGHT")).toBeInTheDocument();
    expect(getByText("6kg")).toBeInTheDocument();

    expect(getByAltText("pikachu front sprite")).toHaveAttribute(
      "src",
      "pikachu_sprite.png"
    );
    expect(getByAltText("pikachu back sprite")).toHaveAttribute(
      "src",
      "pikachu_back_sprite.png"
    );

    expect(getByText("ABILITIES")).toBeInTheDocument();
    expect(getByText("Static")).toBeInTheDocument();
    expect(getByText("Lightning Rod")).toBeInTheDocument();

    expect(getByText("HELD ITEMS")).toBeInTheDocument();
    expect(getByText("Poke Ball")).toBeInTheDocument();
    expect(getByText("Rare Candy")).toBeInTheDocument();

    expect(getByText("TYPE")).toBeInTheDocument();
    expect(getByText("Electric")).toBeInTheDocument();
    expect(getByText("GAME INDICES")).toBeInTheDocument();
  });
});
