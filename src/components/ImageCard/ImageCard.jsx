import css from "./ImageCard.module.css";
const Image = ({ image, onClick }) => {
  return (
    <>
      <div onClick={onClick} className={css.container}>
        <img
          className={css.galleryImage}
          src={image.urls.small}
          alt={image.alt_description}
        />
      </div>
    </>
  );
};
export default Image;
