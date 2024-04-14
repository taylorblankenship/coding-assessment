import { getGallery } from "@/services/poke-service";
import { GalleryPokemon } from "@/services/types";
import { QueryKey, useQuery, useQueryClient } from "@tanstack/react-query";

//todo theoretically search/filter stuff could go here
export const useGalleryPokemon = () => {
  const { data, isLoading } = useQuery<GalleryPokemon[], Error>({
    queryKey: ["gallery-query"] as QueryKey,
    queryFn: async () => {
      const galleryData = await getGallery();
      return galleryData;
    },
    staleTime: Infinity, //we do not want data to be refetched
  });

  return {
    galleryPokemon: data,
    isLoading,
  };
};
