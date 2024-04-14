import { useEffect, useState } from "react";
import styles from "/Gallery.module.css";
import { GalleryPokemon } from "@/services/types";
import { getGallery } from "@/services/poke-service";
import GalleryCard from "../GalleryCard/GalleryCard";

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
      {galleryData?.map((pokemon, idx) => (
        <GalleryCard pokemon={pokemon} key={idx} />
      ))}
    </div>
  );
};

export default Gallery;
