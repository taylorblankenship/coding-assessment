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

const incompatiblePokemon = [
  "basculin",
  "darmanitan",
  "basculegion",
  "keldeo",
  "pumpkaboo",
  "deoxys",
  "meloetta",
  "wormadam",
  "giratina",
  "shaymin",
  "tornadus",
  "thundurus",
  "landorus",
  "meowstic",
  "lycanroc",
  "wishiwashi",
  "minior",
  "mimikyu",
  "aegislash",
  "gourgeist",
  "zygarde",
  "oricorio",
  "toxtricity",
  "eiscue",
  "indeedee",
  "morpeko",
  "urshifu",
  "enamorus",
];

const filterOutIncompatibleData = (data: GalleryPokemon[]) => {
  return data.filter((pokemon) => !incompatiblePokemon.includes(pokemon.name));
};

export const useGalleryPokemon = () => {
  const { data, isLoading } = useQuery<GalleryPokemon[], Error>({
    queryKey: ["gallery-query"],
    queryFn: async () => {
      let galleryData = await getGallery();
      galleryData = filterOutIncompatibleData(galleryData);
      setFilteredGallery(galleryData);
      return galleryData;
    },
    staleTime: Infinity, //we do not want data to be refetched
  });

  const numPerPage = 30;
  const [filteredGallery, setFilteredGallery] = useState<GalleryPokemon[]>(
    data || []
  );
  const [gallerySubset, setGallerySubset] = useState<GalleryPokemon[]>([]);
  const [isEndOfData, setIsEndOfData] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (!filteredGallery) return;
    const startIndex = currentPage * numPerPage;
    const endIdx = Math.min(
      (currentPage + 1) * numPerPage,
      filteredGallery.length
    );
    const subset = filteredGallery.slice(startIndex, endIdx);
    if (currentPage === 0) {
      setGallerySubset(subset);
    } else {
      setGallerySubset((prevGallery) => [...prevGallery, ...subset]);
    }
    setIsEndOfData(endIdx === filteredGallery.length);
  }, [filteredGallery, currentPage]);

  const filterData = (filterString: string) => {
    if (data) {
      setFilteredGallery(
        data?.filter((pokemon) =>
          pokemon.name.includes(filterString.toLowerCase())
        )
      );
      setCurrentPage(0);
      setGallerySubset([]);
    }
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return {
    galleryPokemon: gallerySubset,
    isEndOfData,
    isLoading,
    nextPage,
    filterData,
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
