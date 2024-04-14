import axios from "axios";
import GalleryPokemon from "./types";

interface getGalleryProps {
  pageCount?: number;
}

const getGallery = async (
  galleryProps?: getGalleryProps
): Promise<GalleryPokemon[]> => {
  const url = "https://pokeapi.co/api/v2/pokemon";
  try {
    const res = await axios.get(url);
    console.log(res.data.results);
    return res.data.results;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error("something went wrong");
    }
  }
};

export default getGallery;
