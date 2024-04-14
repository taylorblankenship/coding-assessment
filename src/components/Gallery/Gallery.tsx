import { useEffect, useState } from "react";
import styles from "./Gallery.module.css";
import getGallery from "@/services/gallery-service";
import GalleryPokemon from "@/services/types";

const Gallery = () => {
  // fetch gallery on load
  const [galleryData, setGalleryData] = useState<GalleryPokemon[]>();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getGallery();
        setGalleryData(res);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className={styles.gallery_container}>
      <div>
        {galleryData?.map((pokemon, idx) => (
          <div key={idx}>{pokemon.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
