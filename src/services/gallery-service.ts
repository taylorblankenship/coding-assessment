import axios from "axios";

interface getGalleryProps {
  pageCount?: number;
}

const getGallery = async (galleryProps?: getGalleryProps) => {
  const url = "https://pokeapi.co/api/v2/pokemon";
  try {
    const res = await axios.get(url);
    console.log(res.data.results);
  } catch (error) {
    console.log(error);
  }
};

export default getGallery;
