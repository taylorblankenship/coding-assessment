import {
  getGallery,
  getPokemonDetails,
  getPokemonSpeciesInfo,
} from "@/services/poke-service";
import {
  GalleryPokemon,
  PokemonDetails,
  PokemonSpeciesInfo,
} from "@/services/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

//todo theoretically search/filter stuff could go here
export const useGalleryPokemon = () => {
  const { data, isLoading } = useQuery<GalleryPokemon[], Error>({
    queryKey: ["gallery-query"],
    queryFn: async () => {
      const galleryData = await getGallery();
      return galleryData;
    },
    staleTime: Infinity, //we do not want data to be refetched
  });

  const numPerPage = 20;
  const [gallerySubset, setGallerySubset] = useState<GalleryPokemon[]>([]);
  const [endOfData, setEndOfData] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (!data) return;
    const startIndex = currentPage * numPerPage;
    const endIdx = Math.min((currentPage + 1) * numPerPage, data.length);
    const subset = data.slice(startIndex, endIdx);
    setGallerySubset(subset);
    setEndOfData(endIdx === data.length);
  }, [data, currentPage]);

  const getNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return {
    galleryPokemon: gallerySubset,
    endOfData,
    isLoading,
    getNextPage,
  };
};

export const usePokemonDetails = (name: string) => {
  const { data, isLoading } = useQuery<PokemonDetails, Error>({
    queryKey: ["pokemon-details-query", name],
    queryFn: async () => {
      const pokemonDetails = await getPokemonDetails(name);
      return pokemonDetails;
    },
    staleTime: Infinity, //we do not want data to be refetched
  });

  return {
    pokemonDetails: data,
    isLoading,
  };
};

export const usePokemonSpeciesInfo = (name: string) => {
  const { data, isLoading } = useQuery<PokemonSpeciesInfo, Error>({
    queryKey: ["pokemon-species-info-query", name],
    queryFn: async () => {
      const pokemonSpeciesInfo = await getPokemonSpeciesInfo(name);
      return pokemonSpeciesInfo;
    },
    staleTime: Infinity, //we do not want data to be refetched
  });

  return {
    pokemonSpeciesInfo: data,
    isLoading,
  };
};
