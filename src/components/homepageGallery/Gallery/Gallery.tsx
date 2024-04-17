import styles from "./Gallery.module.css";
import GalleryCard from "../GalleryCard/GalleryCard";
import { useGalleryPokemon } from "@/hooks/usePokemon";
import Loading from "@/components/Loading/Loading";

const Gallery = () => {
  const { galleryPokemon, isEndOfData, isLoading, nextPage, filterData } =
    useGalleryPokemon();

  return isLoading ? (
    <div className={styles.galleryContainer}>
      <Loading />
    </div>
  ) : (
    <div className={styles.galleryContainer}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          onChange={(e) => {
            filterData(e.target.value);
          }}
          placeholder="Type to search..."
        />
      </div>
      {galleryPokemon.length ? (
        <>
          <div className={styles.galleryItemsContainer}>
            {galleryPokemon?.map((pokemon, idx) => (
              <GalleryCard pokemon={pokemon} key={idx} />
            ))}
          </div>
          <button
            className={styles.loadMoreButton}
            disabled={isEndOfData}
            onClick={() => {
              nextPage();
            }}
          >
            Load More
          </button>
        </>
      ) : (
        <div className={`${styles.galleryContainer} ${styles.emptyState}`}>
          No results! Please try a different search.
          <img src="\sleepy-pika.png" alt="sleepy pikachu image" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
