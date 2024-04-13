import { useEffect } from "react";
import styles from "./Gallery.module.css";
import getGallery from "@/services/gallery-service";

const Gallery = () => {
  // fetch gallery on load
  useEffect(() => {
    getGallery();
  }, []);

  return (
    <div className={styles.gallery_container}>
      <div>gallery content</div>
    </div>
  );
};

export default Gallery;
