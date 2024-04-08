import Image from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const Images = ({ images, onImageClick }) => {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <div className={css.galleryItem} key={image.id}>
          <li>
            <Image image={image} onClick={() => onImageClick(image)} />
          </li>
        </div>
      ))}
    </ul>
  );
};

export default Images;
