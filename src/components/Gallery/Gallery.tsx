import styles from "./Gallery.module.css";
import GalleryCard from "../GalleryCard/GalleryCard";
import { useGalleryPokemon } from "@/hooks/usePokemon";

const Gallery = () => {
  const { galleryPokemon, isLoading } = useGalleryPokemon();
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className={styles.gallery_container}>
      {galleryPokemon?.map((pokemon, idx) => (
        <GalleryCard pokemon={pokemon} key={idx} />
      ))}
    </div>
  );
};

export default Gallery;
