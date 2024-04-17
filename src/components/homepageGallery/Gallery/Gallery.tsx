import styles from "./Gallery.module.css";
import GalleryCard from "../GalleryCard/GalleryCard";
import { useGalleryPokemon } from "@/hooks/usePokemon";
import { useEffect, useState } from "react";
import { GalleryPokemon } from "@/services/types";
import Loading from "@/components/Loading/Loading";

const Gallery = () => {
  const [currentGallery, setCurrentGallery] = useState<GalleryPokemon[]>([]);
  const { galleryPokemon, endOfData, isLoading, getNextPage } =
    useGalleryPokemon();

  useEffect(() => {
    if (galleryPokemon && galleryPokemon.length > 0) {
      setCurrentGallery((prevGallery) => [...prevGallery, ...galleryPokemon]);
    }
  }, [galleryPokemon]);

  // todo search bar
  return isLoading ? (
    <div className={styles.galleryContainer}>
      <Loading />
    </div>
  ) : (
    <div className={styles.galleryContainer}>
      <div className={styles.galleryItemsContainer}>
        {currentGallery?.map((pokemon, idx) => (
          <GalleryCard pokemon={pokemon} key={idx} />
        ))}
      </div>
      <button
        className={styles.loadMoreButton}
        disabled={endOfData}
        onClick={() => {
          getNextPage();
        }}
      >
        Load More
      </button>
    </div>
  );
};

export default Gallery;
